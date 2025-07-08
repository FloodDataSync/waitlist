"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const testimonials = [
	{
		name: "Alex Johnson",
		avatar: "/Avatar.png",
		hint: "man portrait",
	},
	{
		name: "Maria Garcia",
		avatar: "/Avatar.png",
		hint: "woman portrait",
	},
	{
		name: "James Smith",
		avatar: "/Avatar.png",
		hint: "person portrait",
	},
	{
		name: "Linda Williams",
		avatar: "/Avatar.png",
		hint: "lady portrait",
	},
	{
		name: "Robert Brown",
		avatar: "/Avatar.png",
		hint: "gentleman portrait",
	},
	{
		name: "Patricia Jones",
		avatar: "/Avatar.png",
		hint: "female portrait",
	},
];

const CARDS_PER_VIEW_CONFIG = { desktop: 3, tablet: 2, mobile: 1 };
const BREAKPOINTS = { tablet: 1024, mobile: 768 };
const SPRING_OPTIONS = {
	type: "spring",
	stiffness: 400,
	damping: 50,
	mass: 0.5,
};

export function TestimonialCarousel() {
	// State to manage the number of cards to show per view
	const [cardsPerView, setCardsPerView] = useState(
		CARDS_PER_VIEW_CONFIG.desktop
	);

	// Augment the testimonials array to enable circular scrolling
	const augmentedTestimonials = [
		...testimonials.slice(-cardsPerView),
		...testimonials,
		...testimonials.slice(0, cardsPerView),
	];

	const START_INDEX = cardsPerView;
	// State to manage the current index of the card being displayed
	const [cardIndex, setCardIndex] = useState(START_INDEX);
	// State to manage the transitioning state of the carousel
	const [isTransitioning, setIsTransitioning] = useState(false);

	const x = useMotionValue(0);
	const containerRef = useRef(null);
	// State to manage the width of the container
	const [containerWidth, setContainerWidth] = useState(0);

	// Calculate the width of each card
	const cardWidth = containerWidth > 0 ? containerWidth / cardsPerView : 0;

	useEffect(() => {
		// Effect to handle window resize and adjust the number of cards per view
		const handleResize = () => {
			const width = window.innerWidth;
			if (containerRef.current) {
				setContainerWidth(containerRef.current.offsetWidth);
			}
			if (width >= BREAKPOINTS.tablet) {
				setCardsPerView(CARDS_PER_VIEW_CONFIG.desktop);
			} else if (width >= BREAKPOINTS.mobile) {
				setCardsPerView(CARDS_PER_VIEW_CONFIG.tablet);
			} else {
				setCardsPerView(CARDS_PER_VIEW_CONFIG.mobile);
			}
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Function to scroll the carousel in the given direction (infinite loop)
	const scroll = (direction) => {
		if (isTransitioning) return;
		let newIndex = cardIndex + direction;
		setIsTransitioning(true);
		animate(x, -newIndex * cardWidth, {
			...SPRING_OPTIONS,
			onComplete: () => {
				let resetIndex = newIndex;
				if (newIndex < cardsPerView) {
					resetIndex = testimonials.length + (newIndex - cardsPerView);
					x.set(-resetIndex * cardWidth);
				} else if (newIndex >= testimonials.length + cardsPerView) {
					resetIndex = cardsPerView + (newIndex - (testimonials.length + cardsPerView));
					x.set(-resetIndex * cardWidth);
				}
				setCardIndex(resetIndex);
				setIsTransitioning(false);
			},
		});
	};

	// Auto-scroll effect
	useEffect(() => {
		const interval = setInterval(() => {
			scroll(1);
		}, 3000);
		return () => clearInterval(interval);
	}, [cardIndex, cardWidth, cardsPerView]);

	return (
		<div className="relative w-full overflow-hidden py-16">
			<div ref={containerRef} className="mx-auto w-full max-w-5xl">
				<motion.div
					className="flex"
					style={{ x }}
					drag={isTransitioning ? false : "x"}
					dragElastic={0.2}
					dragConstraints={{ left: 0, right: 0 }}
				>
					{augmentedTestimonials.map((testimonial, index) => (
						<motion.div
							key={index}
							style={{
								flex:
									cardWidth > 0
										? `0 0 ${100 / cardsPerView}%`
										: "0 0 100%",
								padding: "0 0.75rem",
							}}
							className="select-none flex flex-col items-center cursor-grab active:cursor-grabbing"
						>
							<Card className="relative w-full h-[300px] bg-card shadow-lg overflow-visible mb-12 transition-colors duration-300 bg-[#2F2F2F42]">
								<CardContent className="p-6 text-center h-full flex items-center justify-center ">
									<p className="text-muted-foreground mt-4 text-base italic ">
										"The team at Brissas impressed us from day one. Their understanding of the construction industry and proactive approach to system design helped us implement a solution that fits our exact workflow. BrissTruct isn’t just software—it’s a game changer."
									</p>
								</CardContent>
								<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
									<Avatar className="w-24 h-24 bg-background shadow-md">
										<AvatarImage
											src={testimonial.avatar}
											alt={testimonial.name}
											data-ai-hint={testimonial.hint}
										/>
										<AvatarFallback>
											{testimonial.name.charAt(0)}
										</AvatarFallback>
									</Avatar>
								</div>
							</Card>
							<div className="mt-2">
								<p className="text-center text-lg text-white">
									{testimonial.name}
								</p>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>

			<Button
				variant="outline"
				size="icon"
				className={cn(
					"absolute top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/95 disabled:opacity-30 z-10 transition-all",
					"left-0 sm:left-4"
				)}
				onClick={() => scroll(-1)}
				disabled={isTransitioning}
				aria-label="Previous testimonial"
			>
				<ChevronLeft className="w-6 h-6" />
			</Button>
			<Button
				variant="outline"
				size="icon"
				className={cn(
					"absolute top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/95 disabled:opacity-30 z-10 transition-all",
					"right-0 sm:right-4"
				)}
				onClick={() => scroll(1)}
				disabled={isTransitioning}
				aria-label="Next testimonial"
			>
				<ChevronRight className="w-6 h-6" />
			</Button>
		</div>
	);
}
