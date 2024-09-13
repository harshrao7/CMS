import { Carousel } from "@material-tailwind/react";
import './CarouselNavigation.css';
// import './LandingPage.css';
export function CarouselNavigation() {
    return (
        <>
            <div className="carouselwrap">
                <Carousel
                    className="h-60 w-8/12 flex rounded-xl "
                    navigation={({ setActiveIndex, activeIndex, length }) => (
                        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                            {new Array(length).fill("").map((_, i) => (
                                <span
                                    key={i}
                                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                        }`}
                                    onClick={() => setActiveIndex(i)}
                                />
                            ))}
                        </div>
                    )}
                >
                    <img
                        src="https://media.geeksforgeeks.org/wp-content/uploads/20230418110931/10-popular-AI-Tools-in-2023-copy.webp"
                        alt="image 1"
                        className="h-full w-full object-cover"
                    />
                    <img
                        src="https://media.geeksforgeeks.org/wp-content/uploads/20230602174859/OpenAI-Python-Tutorial-.webp"
                        alt="image 2"
                        className="h-full w-full"
                    />
                    <img
                        src="https://media.geeksforgeeks.org/wp-content/uploads/20230828150141/GeeksforGeeks-Master-Sheet.webp"
                        alt="image 3"
                        className="h-full w-full"
                    />
                </Carousel>
            </div>
        </>
    );
}