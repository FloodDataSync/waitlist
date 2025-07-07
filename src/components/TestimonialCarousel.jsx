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
		avatar: "https://placehold.co/100x100.png",
		hint: "man portrait",
	},
	{
		name: "Maria Garcia",
		avatar: "https://placehold.co/100x100.png",
		hint: "woman portrait",
	},
	{
		name: "James Smith",
		avatar: "https://placehold.co/100x100.png",
		hint: "person portrait",
	},
	{
		name: "Linda Williams",
		avatar: "https://placehold.co/100x100.png",
		hint: "lady portrait",
	},
	{
		name: "Robert Brown",
		avatar: "https://placehold.co/100x100.png",
		hint: "gentleman portrait",
	},
	{
		name: "Patricia Jones",
		avatar: "https://placehold.co/100x100.png",
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

	// Function to scroll the carousel in the given direction
	const scroll = (direction) => {
		if (isTransitioning) return;

		const newIndex = cardIndex + direction;
		setCardIndex(newIndex);

		const newX = -newIndex * cardWidth;
		setIsTransitioning(true);

		animate(x, newX, {
			...SPRING_OPTIONS,
			onComplete: () => {
				// Reset the position of the carousel for circular scrolling
				if (newIndex === START_INDEX - 1) {
					const resetIndex = testimonials.length + START_INDEX - 1;
					x.set(-resetIndex * cardWidth);
					setCardIndex(resetIndex);
				} else if (newIndex === testimonials.length + START_INDEX) {
					x.set(-START_INDEX * cardWidth);
					setCardIndex(START_INDEX);
				}
				setIsTransitioning(false);
			},
		});
	};

	// Auto-scroll effect
	useEffect(() => {
		const interval = setInterval(() => {
			scroll(1); // Automatically scroll one card at a time
		}, 3000); // Adjust the interval duration as needed
		return () => clearInterval(interval);
	}, [cardIndex, cardWidth]);

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
							<Card className="relative w-full h-[250px] bg-card shadow-lg overflow-visible mb-12 border-2 border-accent/20 hover:border-accent/50 transition-colors duration-300">
								<CardContent className="p-6 text-center h-full flex items-center justify-center">
									<p className="text-muted-foreground mt-4 text-base italic">
										"A fantastic experience from start to finish. Highly
										recommended!"
									</p>
								</CardContent>
								<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
									<Avatar className="w-24 h-24 border-4 border-background bg-background shadow-md">
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
							<div className="mt-4">
								<p className="text-center font-bold text-lg text-foreground/90">
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
