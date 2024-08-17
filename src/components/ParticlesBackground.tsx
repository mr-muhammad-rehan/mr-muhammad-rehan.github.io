"use client"
import React, { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { ISourceOptions } from "@tsparticles/engine";

const ParticlesBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options: ISourceOptions = {
        autoPlay: true,
        fullScreen: {
            enable: true,
            zIndex: -1,
        },
        detectRetina: true,
        fpsLimit: 125,
        interactivity: {
            detectsOn: "window",
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: {
                    enable: true,
                },
            },
        },
        particles: {
            bounce: {
                horizontal: {
                    value: 2,
                },
                vertical: {
                    value: 2,
                },
            },
            collisions: {
                absorb: {
                    speed: 1,
                },
                bounce: {
                    horizontal: {
                        value: 5,
                    },
                    vertical: {
                        value: 2,
                    },
                },
                enable: false,
            },
            color: {
                value: "#9ebdeb93",
            },
            move: {
                enable: true,
                outModes: {
                    default: "destroy",
                },
                speed: 1,
            },
            number: {
                density: {
                    enable: true,
                    width: 1920,
                    height: 1080,
                },
                value: 500,
            },
            opacity: {
                value: {
                    min: 0.3,
                    max: 0.8,
                },
                animation: {
                    enable: true,
                    speed: 0.2,
                    startValue: "random",
                },
            },
            shape: {
                type: "triangle",
            },
            size: {
                value: {
                    min: 1,
                    max: 3,
                },
                animation: {
                    enable: true,
                    speed: 1,
                    startValue: "random",
                },
            },
            links: {
                color: {
                    value: "random",
                },
                distance: 100,
                enable: true,
                opacity: 1,
                width: 1,
            },
        },
        motion: {
            reduce: {
                factor: 4,
                value: true,
            },
        },
    };

    if (init) {
        return (
            <Particles
                id="tsparticles"
                options={options}
            />
        );
    }

    return <></>;
};

export default ParticlesBackground;
