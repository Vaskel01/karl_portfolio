'use client'

import Image from "next/image";
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
  PROJECTS,
  WORK_EXPERIENCE,
  EDUCATION,
  EMAIL,
  SOCIAL_LINKS,
} from './data'


// Motion container variants for staggering child elements (fade-in animation)
const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // each child appears 0.15s after previous
    },
  },
}

// Animation variants for individual items (cards, sections, etc.)
const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1], // smooth easing
    },
  },
}

// Variants for lists (for example: the horizontal slider)
const LIST_VARIANTS = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

// Section-level animation (blur + fade-in)
const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

// Simple transition config for sections
const TRANSITION_SECTION = {
  duration: 0.3,
}

type ProjectImageProps = {
  src: string
}

// Component for displaying project images with morphing dialog animation
function ProjectImage({ src }: ProjectImageProps) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      {/* Trigger: clicking the image opens the dialog */}
      <MorphingDialogTrigger>
        <Image
          src={src}
          alt=""
          width={800}
          height={600}
          className="aspect-video w-full cursor-zoom-in rounded-xl object-cover"
        />
      </MorphingDialogTrigger>

      {/* The actual dialog container */}
      <MorphingDialogContainer>
        <MorphingDialogContent
          className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50"
        >
          <Image
            src={src}
            alt=""
            width={1920}
            height={1080}
            className="aspect-video h-[50vh] w-full rounded-xl object-cover md:h-[70vh]"
          />
        </MorphingDialogContent>

        {/* Close button for dialog */}
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

// Magnetic social links (button reacts to mouse hover slightly)
function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        {/* small arrow icon */}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
}

// Main Personal Page
export default function Personal() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER} // fade-in container
      initial="hidden"
      animate="visible"
    >
      {/* About Me Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1">
          <p className="text-zinc-600 dark:text-zinc-400">
            I am a passionate web developer driven by the desire to create meaningful and user-friendly digital experiences.
            I thrive on solving complex problems with elegant code and constantly pushing myself to
            learn new technologies that enhance both functionality and design.
          </p>
        </div>
      </motion.section>

      {/* Projects Section with Horizontal Slider */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        initial="hidden"
        animate="visible"
      >
        <h3 className="mb-5 text-lg font-medium">My Projects</h3>

        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button
            onClick={() => {
              const slider = document.getElementById('projects-slider')
              if (!slider) return

              const cardWidth = slider.offsetWidth
              slider.scrollBy({ left: -cardWidth, behavior: 'smooth' })
            }}
            className="z-10 mr-2 rounded-full bg-white p-2 shadow-md dark:bg-zinc-800"
          >
            &#8592;
          </button>

          {/* Project Cards Slider */}
          <motion.div
            id="projects-slider"
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory flex-nowrap w-full"
            style={{ scrollbarWidth: 'none' }} // hide scrollbar for clean look
            variants={LIST_VARIANTS}
          >
            {PROJECTS.map((project) => (
              <motion.div
                key={project.name}
                className="flex-shrink-0 w-full snap-start space-y-2" // one card at a time
                variants={ITEM_VARIANTS}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Project Image */}
                <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                  <ProjectImage src={project.image} />
                </div>

                {/* Project Info */}
                <div className="px-1">
                  <a className="relative inline-block group cursor-pointer">
                    {project.name}
                    <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
                  </a>

                  <p className="text-base text-zinc-600 dark:text-zinc-400">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Arrow */}
          <button
            onClick={() => {
              const slider = document.getElementById('projects-slider')
              if (!slider) return

              const cardWidth = slider.offsetWidth
              slider.scrollBy({ left: cardWidth, behavior: 'smooth' })
            }}
            className="z-10 ml-2 rounded-full bg-white p-2 shadow-md dark:bg-zinc-800"
          >
            &#8594;
          </button>
        </div>
      </motion.section>

      {/* Work Experience Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        initial="hidden"
        animate="visible"
      >
        <h3 className="mb-5 text-lg font-medium">Work Experience</h3>

        <motion.div
          className="flex flex-col space-y-2"
          variants={LIST_VARIANTS}
        >
          {WORK_EXPERIENCE.map((WorkExperience) => (
            <motion.a
              key={WorkExperience.id}
              variants={ITEM_VARIANTS}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer"
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="relative flex w-full flex-row justify-between">
                  <div>
                    <h4 className="font-normal dark:text-zinc-100">
                      {WorkExperience.title}
                    </h4>
                    <p className="text-zinc-500 dark:text-zinc-400">
                      {WorkExperience.company}
                    </p>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {WorkExperience.start} - {WorkExperience.end}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">My Education: </h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {EDUCATION.map((Education) => (
              <div
                key={Education.uid}
                className="-mx-3 rounded-xl px-3 py-3"
                data-id={Education.uid}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {Education.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    {Education.description}
                  </p>
                </div>
              </div>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Contact Info:</h3>
        <p className="mb-5">
          +63123456790
          <br></br>
          Feel free to contact me at{' '}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
