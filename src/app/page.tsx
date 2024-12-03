"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Volume2,
  VolumeX,
  Download,
  Zap,
  Apple,
  ComputerIcon as Windows,
  LaptopIcon as Linux,
  Speaker,
  Settings,
  PartyPopper,
  UserPlus,
  Github,
  Star,
} from "lucide-react";
import Link from "next/link";
//simport { LiveDemo } from "@/components/live-demo";

export default function VineBoomerLanding() {
  const [muted, setMuted] = useState(false);
  const [lastBoomTime, setLastBoomTime] = useState(0);
  const downloadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const boomInterval = setInterval(() => {
      if (!muted && Date.now() - lastBoomTime > 5000) {
        playVineBoom();
        setLastBoomTime(Date.now());
      }
    }, 1000);

    return () => clearInterval(boomInterval);
  }, [muted, lastBoomTime]);

  const playVineBoom = () => {
    const audio = new Audio("/assets/audio/vine-boom.mp3");
    audio.volume = 0.3; // Reduced volume for background effect
    audio.play();
  };

  const starCount = 1;

  return (
    <div className="min-h-screen bg-[#1a1a2e] text-white overflow-hidden relative">
      <div
        className="absolute inset-0 bg-repeat opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556l-1.414-1.414L28 0h4zM.284 0l28 28-1.414 1.414L0 2.544V0h.284zM0 5.373l25.456 25.455-1.414 1.415L0 8.2V5.374zm0 5.656l22.627 22.627-1.414 1.414L0 13.86v-2.83zm0 5.656l19.8 19.8-1.415 1.413L0 19.514v-2.83zm0 5.657l16.97 16.97-1.414 1.415L0 25.172v-2.83zM0 28l14.142 14.142-1.414 1.414L0 30.828V28zm0 5.657L11.314 44.97 9.9 46.386l-9.9-9.9v-2.828zm0 5.657L8.485 47.8 7.07 49.212 0 42.143v-2.83zm0 5.657l5.657 5.657-1.414 1.415L0 47.8v-2.83zm0 5.657l2.828 2.83-1.414 1.413L0 53.456v-2.83zM54.627 60L30 35.373 5.373 60H8.2L30 38.2 51.8 60h2.827zm-5.656 0L30 41.03 11.03 60h2.828L30 43.858 46.142 60h2.83zm-5.656 0L30 46.686 16.686 60h2.83L30 49.515 40.485 60h2.83zm-5.657 0L30 52.343 22.343 60h2.83L30 55.172 34.828 60h2.83zM32 60l-2-2-2 2h4zM59.716 0l-28 28 1.414 1.414L60 2.544V0h-.284zM60 5.373L34.544 30.828l1.414 1.415L60 8.2V5.374zm0 5.656L37.373 33.656l1.414 1.414L60 13.86v-2.83zm0 5.656l-19.8 19.8 1.415 1.413L60 19.514v-2.83zm0 5.657l-16.97 16.97 1.414 1.415L60 25.172v-2.83zM60 28L45.858 42.142l1.414 1.414L60 30.828V28zm0 5.657L48.686 44.97l1.415 1.415 9.9-9.9v-2.828zm0 5.657L51.515 47.8l1.414 1.413 7.07-7.07v-2.83zm0 5.657l-5.657 5.657 1.414 1.415L60 47.8v-2.83zm0 5.657l-2.828 2.83 1.414 1.413L60 53.456v-2.83zM39.9 16.385l1.414-1.414L30 3.658 18.686 14.97l1.415 1.415 9.9-9.9 9.9 9.9zm-2.83 2.828l1.415-1.414L30 9.313 21.515 17.8l1.414 1.413 7.07-7.07 7.07 7.07zm-2.827 2.83l1.414-1.416L30 14.97l-5.657 5.657 1.414 1.415L30 17.8l4.243 4.242zm-2.83 2.827l1.415-1.414L30 20.626l-2.828 2.83 1.414 1.414L30 23.456l1.414 1.414zM56.87 59.414L58.284 58 30 29.716 1.716 58l1.414 1.414L30 32.544l26.87 26.87z' fill='%23ffffff' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      ></div>
      {/* Floating Vine leaves with reduced opacity and quantity
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <img
            key={i}
            src="/assets/img/logo.png"
            alt=""
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              opacity: 0.15,
              filter: "invert(1)",
              transform: `rotate(${Math.random() * 360}deg)`,
              width: `${Math.random() * 20 + 15}px`,
            }}
          />
        ))}
      </div> */}
      <main className="container mx-auto px-4 py-16 relative z-10">
        <nav className="flex justify-between items-center mb-16">
          <h1 className="text-4xl font-bold">Vine Boomer</h1>
          <div className="flex flex-wrap gap-4">
            <Button
              size="icon"
              variant="outline"
              onClick={() => setMuted(!muted)}
              className="rounded-full bg-white/20 hover:bg-white/30"
            >
              {muted ? <VolumeX /> : <Volume2 />}
            </Button>
            <Button
              variant="outline"
              className="bg-white/20 hover:bg-white/30 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            >
              <UserPlus className="mr-2" /> Login / Signup
            </Button>
          </div>
        </nav>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-5xl font-bold mb-6">
              Random. Loud. Hilarious. Welcome to Vine Boomer!
            </h2>
            <p className="text-xl mb-8">
              The best App for random Vine Booms (and the only one). Set your
              intervals, and get boomed! Perfect for pranks, or just surprising
              yourself!
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() =>
                  downloadRef.current?.scrollIntoView({ behavior: "smooth" })
                }
                size="lg"
                className="bg-white text-pink-600 hover:bg-pink-100 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:rotate-3"
              >
                <Download className="mr-2" /> Download Now
              </Button>
              <Button
                size="lg"
                className="bg-black text-white hover:bg-gray-800 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:rotate-3 flex items-center"
              >
                <Github className="mr-2" />
                Star on GitHub
                {starCount !== null && (
                  <span className="ml-2 bg-white text-black rounded-full px-2 py-1 text-xs font-bold flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    {starCount.toLocaleString()}
                  </span>
                )}
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              {/* <LiveDemo /> */}
            </div>
            <div className="absolute -top-4 -left-4 bg-yellow-300 text-pink-600 rounded-full p-2 animate-bounce">
              <Zap size={24} />
            </div>
          </div>
        </div>

        <section className="mt-24">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Why You&apos;ll Love Vine Boomer
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Speaker size={48} />,
                title: "Endless Vine Booms",
                description:
                  "Plays the Vine Boom sound effect at random intervals.",
              },
              {
                icon: <Settings size={48} />,
                title: "Fully Configurable",
                description:
                  "Adjust timing and randomness to create the perfect boom experience.",
              },
              {
                icon: <PartyPopper size={48} />,
                title: "Perfect for Jumpscares",
                description: "I promise you will be scared everytime!",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/20 transition-colors duration-300 transform hover:scale-105 hover:-rotate-3"
              >
                <div className="text-yellow-300 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-white/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <h3 className="text-3xl font-bold mb-12 text-center">
            Download Vine Boomer
          </h3>
          <div
            id="download"
            ref={downloadRef}
            className="grid md:grid-cols-3 gap-8"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center">
              <Windows size={48} className="mx-auto mb-4 text-blue-300" />
              <h4 className="text-xl font-semibold mb-2">Windows</h4>
              <p className="text-white/80 mb-4">
                Ready to boom on your PC? Download now and start Vine booming!
              </p>
              <ul className="text-sm text-white/70 mb-4 text-left">
                <li>• Windows 10 or later</li>
                <li>• 3mb RAM minimum</li>
                <li>• 10MB free space</li>
              </ul>
              <Link
                href={"https://github.com/die-vollidioten/vine-boomer/tags"}
                target="_blank"
              >
                <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300  transform hover:scale-110 hover:rotate-3 ">
                  Download for Windows
                </Button>
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/20 transition-colors duration-300 transform hover:scale-105">
              <Apple size={48} className="mx-auto mb-4 text-gray-300" />
              <h4 className="text-xl font-semibold mb-2">macOS</h4>
              <p className="text-white/80 mb-4">
                Boom on your Mac soon! We&apos;re working hard to bring you the
                macOS version.
              </p>
              <ul className="text-sm text-white/70 mb-4 text-left">
                <li>• macOS 11 Big Sur or later</li>
                <li>• 3mb RAM minimum</li>
                <li>• 10MB free space</li>
              </ul>
              <Button
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out opacity-50 cursor-not-allowed"
                disabled
              >
                Coming Soon
              </Button>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/20 transition-colors duration-300 transform hover:scale-105">
              <Linux size={48} className="mx-auto mb-4 text-yellow-300" />
              <h4 className="text-xl font-semibold mb-2">Linux</h4>
              <p className="text-white/80 mb-4">
                Linux lovers, we have forgotten you! Vine Boomer isn&apos;t
                coming to your favorite OS.
              </p>
              <ul className="text-sm text-white/70 mb-4 text-left">
                <li>• Ubuntu 20.04 or equivalent</li>
                <li>• 57GB RAM minimum</li>
                <li>• 106GB free space</li>
              </ul>
              <Button
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out opacity-50 cursor-not-allowed"
                disabled
              >
                Coming never
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
