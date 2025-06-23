"use client"

import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';
import { Container } from '../atoms';

export default function SwiperCarousel() {
    const swiperRef = useRef(null);

    useEffect(() => {
        // Register Swiper web component
        register();

        // Object with parameters
        const params = {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            breakpoints: {
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            },
            injectStyles: [
                `
                .swiper-wrapper {
                  display: flex;
                  item-align: center;
                    justify-content: center;
                    gap: 10px;
                    width: fit-content;
                }
                `,
              ],
        };

        // Assign it to swiper element
        Object.assign(swiperRef.current, params);

        // initialize swiper
        swiperRef.current.initialize();
    }, []);

    return (
        <Container>
            <swiper-container init="false" ref={swiperRef}>
                <swiper-slide>
                    <div className='className={`flex bg-blueLight-600 items-center justify-center flex-col h-96 w-20`}'>
                        Slide 1
                        <button className='btn-primary'>Click Here</button>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className='className={`flex bg-primary-600 items-center justify-center flex-col h-96 w-20`}'>
                        Slide 2
                        <button className='btn-primary'>Click Here</button>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className='className={`flex bg-blueLight-600 items-center justify-center flex-col h-96 w-20`}'>
                        Slide 3
                        <button className='btn-primary'>Click Here</button>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className='className={`flex bg-primary-600 items-center justify-center flex-col h-96 w-20`}'>
                        Slide 4
                        <button className='btn-primary'>Click Here</button>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className='className={`flex bg-blueLight-600 items-center justify-center flex-col h-96 w-20`}'>
                        Slide 5
                        <button className='btn-primary'>Click Here</button>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div className='className={`flex bg-primary-600 items-center justify-center flex-col h-96 w-20`}'>
                        Slide 6
                        <button className='btn-primary'>Click Here</button>
                    </div>
                </swiper-slide>
            </swiper-container>
        </Container>
    );
}