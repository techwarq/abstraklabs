"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function CountdownTimer() {
    const calculateTimeLeft = (): TimeLeft => {
        const difference = +new Date("2026-01-10T06:00:00") - +new Date();
        let timeLeft: TimeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!mounted) return null;

    return (
        <div className="w-full bg-black text-white  border-b border-white/10">
            <div className="max-w-[1400px] mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-left md:text-left">
                    <h2 className="text-sm font-bold tracking-widest text-green-500 uppercase mb-2">Beta Launch</h2>
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tighter">
                        Allore AI <span className="text-white/50">coming soon</span>
                    </h3>
                </div>

                <div className="flex items-start gap-8 md:gap-12">
                    <TimeUnit value={timeLeft.days} label="Days" />
                    <TimeUnit value={timeLeft.hours} label="Hours" />
                    <TimeUnit value={timeLeft.minutes} label="Minutes" />
                    <TimeUnit value={timeLeft.seconds} label="Seconds" />
                </div>

                <div className="hidden md:block">
                    <a href="https://www.alloreai.com/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-green-600 text-black font-bold text-xs uppercase tracking-widest hover:bg-green-500 transition-colors">
                        Join Waitlist
                    </a>
                </div>
            </div>
        </div>
    );
}

function TimeUnit({ value, label }: { value: number, label: string }) {
    return (
        <div className="flex flex-col items-center md:items-start group">
            <motion.div
                key={value}
                initial={{ y: 5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl md:text-5xl font-mono font-light tracking-tighter text-white group-hover:text-green-500 transition-colors"
            >
                {String(value).padStart(2, '0')}
            </motion.div>
            <span className="text-[10px] uppercase tracking-widest text-white/40 mt-1">{label}</span>
        </div>
    );
}
