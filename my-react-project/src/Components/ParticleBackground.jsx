import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import React from "react";

function ParticleBackground() {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particleOptions = useMemo(() => ({
    background: {
      color: "transparent",
    },
    particles: {
      number: {
        value: 20,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: ["#ffefe3", "#8bd3dd", "#679289"]
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.6,
        random: true,
      },
      size: {
        value: 3,
        random: true,
      },
      links: {
        enable: true,
        distance: 150,
        color: "#ffefe3",
        opacity: 0.3,
        width: 1,
        triangles: {
          enable: true,
          opacity: 0.05
        }
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "bounce"
        },
        attract: {
          enable: false
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        onClick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 0.5
          }
        },
        push: {
          particles_nb: 3
        }
      }
    },
    retina_detect: true
  }), []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particleOptions}
    />
  );
}

export default React.memo(ParticleBackground); 