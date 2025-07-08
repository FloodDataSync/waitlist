"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Radio } from "lucide-react";

const cardsData = [
	{
		id: 1,
		imgSrc: "/frame1.png",
	},
	{
		id: 2,
		imgSrc: "/frame2.png",
		videoSrc: "/video.mp4",
		name: "Wade Fox",
		followers: "12.5k",
		avatarSrc: "/frameavatar.png",
		avatarHint: "man serious",
	},
	{
		id: 3,
		imgSrc: "/thirdframe.png",
	},
];

export function HeroCarousel() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [playingVideo, setPlayingVideo] = useState(null);
	const isMobile = useIsMobile();
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	useEffect(() => {
		if (playingVideo) return;

		const interval = setInterval(() => {
			setActiveIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
		}, 3000);
		return () => clearInterval(interval);
	}, [playingVideo]);

	useEffect(() => {
		if (playingVideo) {
			const timer = setTimeout(() => {
				setPlayingVideo(null);
			}, 15000);

			return () => clearTimeout(timer);
		}
	}, [playingVideo]);

	const total = cardsData.length;

	if (!isClient) {
		return null;
	}

	return (
		<>
			<div className="relative w-full max-w-2xl mx-auto h-[50vh] sm:h-[450px] flex flex-col items-center justify-center">
				<div className="relative w-full h-full sm:h-[400px]">
					{cardsData.map((card, index) => {
						const offset = (index - activeIndex + total) % total;

						let x = "0%";
						let scale = 1;
						let zIndex = 1;
						let opacity = 0;

						if (isMobile) {
							if (offset === 0) {
								x = "0%";
								scale = 1;
								zIndex = 3;
								opacity = 1;
							} else {
								x = "0%";
								scale = 0.5;
								zIndex = 1;
								opacity = 0;
							}
						} else {
							switch (offset) {
								case 0:
									x = "0%";
									scale = 1.1;
									zIndex = 3;
									opacity = 1;
									break;
								case 1:
									x = "35%";
									scale = 0.8;
									zIndex = 2;
									opacity = 1;
									break;
								case total - 1:
									x = "-35%";
									scale = 0.8;
									zIndex = 2;
									opacity = 1;
									break;
								default:
									x = "0%";
									scale = 0.5;
									zIndex = 1;
									opacity = 0;
									break;
							}
						}

						return (
							<motion.div
								key={card.id}
								className="absolute w-full h-full flex items-center justify-center cursor-pointer"
								style={{
									transformStyle: "preserve-3d",
								}}
								animate={{
									x,
									scale,
									zIndex,
									opacity,
								}}
								transition={{ type: "spring", stiffness: 60, damping: 20 }}
								onClick={() => {
									if (offset === 0) {
										setPlayingVideo(card.videoSrc);
									}
								}}
							>
								<Card className="w-[80%] sm:w-[60%] h-full sm:h-[350px] shadow-2xl bg-card rounded-xl overflow-hidden">
									<CardContent className="p-0 h-full relative">
										<Image
											src={card.imgSrc}
											alt={`Card image ${card.id}`}
											fill
											className="object-cover"
											data-ai-hint={card.hint}
										/>
										{offset === 0 && card.avatarSrc && card.name && card.followers && (
											<motion.div
												className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent"
												initial={{ opacity: 0, y: 20 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{
													duration: 0.5,
													delay: 0.2,
													ease: "easeInOut",
												}}
											>
												<div className="flex items-center justify-between">
													<div className="flex items-center gap-3">
														<Image
															src={card.avatarSrc}
															alt={card.name}
															width={40}
															height={40}
															className="rounded-full border-2 border-white object-cover"
															data-ai-hint={card.avatarHint}
														/>
														<div>
															<p className="font-bold text-white text-sm">
																{card.name}
															</p>
															<p className="text-xs text-white/80">
																{card.followers} Followers
															</p>
														</div>
													</div>
													<Button variant="destructive" size="sm">
														<Radio className="mr-2 h-4 w-4" />
														LIVE
													</Button>
												</div>
											</motion.div>
										)}
									</CardContent>
								</Card>
							</motion.div>
						);
					})}
				</div>
			</div>
			<Dialog
				open={!!playingVideo}
				onOpenChange={(isOpen) => !isOpen && setPlayingVideo(null)}
			>
				<DialogContent className="p-0 border-0 bg-black max-w-none w-screen h-screen flex items-center justify-center">
					<DialogTitle className="sr-only">Video Player</DialogTitle>
					{playingVideo && (
						<video
							src={playingVideo}
							className="w-full h-auto max-h-full object-contain"
							autoPlay
							controls
							onEnded={() => setPlayingVideo(null)}
						/>
					)}
				</DialogContent>
			</Dialog>
		</>
	);
}
