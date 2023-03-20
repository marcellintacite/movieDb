"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import w from "../src/w.jpg";
import we from "../src/wr.jpg";
import { motion, useAnimation } from "framer-motion";
import { RxTextAlignJustify } from "react-icons/rx";
import { FaFacebook, FaTwitter, FaInstagram, FaTimes } from "react-icons/fa";
import f from "../src/4739314.jpg";
import e from "../src/f.jpg";
import e1 from "../src/e1.webp";
import e2 from "../src/e2.jpg";
import e3 from "../src/e3.png";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

export default function page() {
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const box = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.3 * 3,
      },
    },
    hidden: { opacity: 0, y: 30 },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();
  const [togle, setTogle] = useState(false);

  const handleTogle = () => {
    setTogle(!togle);
    console.log(togle);
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  console.log(togle);
  return (
    <main className="bg-gradient-to-br from-slate-700 to-gray-700">
      <nav className="h-14 bg-transparent flex justify-between p-4 pl-8  box items-center relative">
        <h3 className="sm:text-3xl font-bold text-red-50">TechWriter</h3>
        <div className="sm:hidden" onClick={handleTogle}>
          <RxTextAlignJustify
            className={togle ? "hidden" : "text-3xl cursor-pointer text-white"}
          />
          <FaTimes
            className={!togle ? "hidden" : "text-3xl cursor-pointer text-white"}
          />
        </div>
        <motion.div
          initial={{ scale: 0, translateX: 10 }}
          animate={{ scale: 1, translateX: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className={
            togle
              ? "flex flex-col absolute rounded-md top-16 p-3 pb-5 h-max bg-slate-400 right-5"
              : "hidden sm:flex"
          }
        >
          <div className="flex-col h-8 items-center p-5 relative">
            <Link className="text-slate-100" href="/">
              Accueil
            </Link>
            <div className="h-0.5 bg-slate-400"></div>
          </div>
          <div className="flex-col h-8 items-center p-5 relative">
            <Link className="text-slate-100" href="/">
              A propos
            </Link>
          </div>
          <div className="flex-col h-8 items-center p-5 relative">
            <Link className="text-slate-100" href="/">
              Contact
            </Link>
          </div>
        </motion.div>
      </nav>
      <section className="min-h-full justify-center items-center bg-gradient-to-bl from-slate-700 to-slate-600 sm:flex">
        <div className="p-8 text-white flex-1">
          <h2 className="text-4xl pt-20 sm:pt-0 sm:text-6xl font-bold ">
            Découvrez les écrivains cachés dans l'ombre de Bukavu
          </h2>
          <p className="pt-5 pb-5 text-gray-100">
            Nous sommes une communauté des développeurs et des écrivains
            passionés de la lecture et de l'écriture.
          </p>
          <button className="p-3 bg-slate-700 rounded-tr-lg rounded-bl-lg hover:bg-slate-400  transition-all">
            Réjoignez-nous maintenant
          </button>
        </div>
        <div className="flex-1 p-8 sm:p-20">
          <Image src={w} className="w-screen sm:rounded-t-full rounded" />
        </div>
      </section>
      <motion.section
        ref={ref}
        variants={box}
        initial="hidden"
        animate={control}
        className="sm:flex m-auto p-10 gap-5 bg-slate-700 "
      >
        <div className="p-6  flex-1 bg-slate-600 rounded-lg mb-5 sm:mb-0">
          <h2 className="text-white font-bold text-2xl">Ecriture</h2>
          <p className="pt-2 text-gray-300">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
            enim rem adipisci facilis. Expedita voluptas similique nihil beatae
            earum pariatur.
          </p>
        </div>
        <div className="p-6 flex-1 bg-slate-600 rounded-lg mb-5 sm:mb-0">
          <h2 className="text-white font-bold text-2xl">Developpement</h2>
          <p className="pt-2 text-gray-300">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
            enim rem adipisci facilis. Expedita voluptas similique nihil beatae
            earum pariatur.
          </p>
        </div>
        <div className="p-6 flex-1 bg-slate-600 rounded-lg mb-5 sm:mb-0">
          <h2 className="text-white font-bold text-2xl">Travail</h2>
          <p className="pt-2 text-gray-300">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
            enim rem adipisci facilis. Expedita voluptas similique nihil beatae
            earum pariatur.
          </p>
        </div>
      </motion.section>
      <motion.section
        className="p-8 "
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transitionDuration: 0.3,
        }}
      >
        <h2 className="text-center text-2xl text-white font-bold pb-5 sm:text-4xl">
          Notre mission
        </h2>
        <div className="sm:flex pt-5 ">
          <div className="flex-1 text-slate-50 flex flex-col items-center justify-center">
            <p className="pb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
              numquam natus, veritatis temporibus enim, ea cum quasi esse fugiat
              tempora nihil repellat dolor sapiente optio. Provident maxime
              magni exercitationem obcaecati.
            </p>
            <p className="pb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              perspiciatis neque eos quibusdam modi sunt possimus saepe iste
              fugit est impedit, aliquam tempore, velit praesentium sed labore
              nulla ipsam magnam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              perspiciatis neque eos quibusdam modi sunt possimus saepe iste
              fugit est impedit, aliquam tempore, velit praesentium sed labore
              nulla ipsam magnam.
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center mt-8 sm:mt-0">
            <Image src={we} className="sm:w-4/5 rounded" />
          </div>
        </div>
      </motion.section>
      <section className="bg-gradient-to-r from-slate-700 to-gray-900 pt-10 ">
        <h2 className="text-center text-2xl text-white font-bold pb-5 sm:text-4xl">
          Rejoignez-nous
        </h2>
        <div className="sm:flex">
          <div className="sm:p-8 p-4 flex justify-center items-center flex-1">
            <Image
              src={f}
              className="sm:w-5/6 rounded-xl"
              alt="Image pour la connexion"
            />
          </div>
          <div className="sm:p-8 p-5 flex-1">
            <h2 className="font-bold text-2xl text-white">Inscription</h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate.
            </p>
            <form action="" className="sm:w-5/6">
              <div className="mt-5">
                <label htmlFor="nom" className="text-white">
                  Votre nom complet
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="tacite"
                  className="w-full mt-1 h-12 rounded-md pl-2 outline-none bg-slate-600 text-slate-50"
                />
              </div>
              <div className="mt-5">
                <label htmlFor="nom" className="text-white">
                  Votre adresse mail
                </label>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="tacite@gmail.com"
                  className="w-full mt-1 h-12 rounded-md pl-2 outline-none bg-slate-600 text-slate-50"
                />
              </div>
              <div className="mt-5">
                <label htmlFor="nom" className="text-white">
                  Votre mot de passe
                </label>
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="*****"
                  className="w-full mt-1 h-12 rounded-md pl-2 outline-none bg-slate-600 text-slate-50"
                />
              </div>
              <div className="mt-5">
                <label htmlFor="nom" className="text-white">
                  Verification mot de passe
                </label>
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="*****"
                  className="w-full mt-1 h-12 rounded-md pl-2 outline-none bg-slate-600 text-slate-50"
                />
              </div>
              <button className="w-full h-12 mt-6 bg-gray-600 text-white font-semibold rounded">
                Inscription
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="sm:p-8 p-5">
        <h2 className="text-center text-2xl text-white font-bold pb-5 sm:text-4xl">
          Articles recents
        </h2>
        <div className="flex gap-7 flex-wrap justify-center">
          <div className="bg-slate-600 p-3 rounded-md sm:w-80">
            <Image src={e} alt="articles" className="rounded-md" />
            <h2 className="text-xl pt-3 text-white">
              Comment devenir développeur dans 3 mois
            </h2>
            <p className="pt-3 text-slate-400">13 mars 2023</p>
            <div className="p-3 rounded-md text-center bg-slate-500 font-bold mt-3">
              <Link href="/" className="mt-6 text-center text-white">
                Lire maintenant
              </Link>
            </div>
          </div>

          <div className="bg-slate-600  p-3 rounded-md sm:w-80">
            <Image src={e1} alt="articles" className="rounded-md" />
            <h2 className="text-xl pt-3 text-white">
              Créer des disgns modernes avec Figma
            </h2>
            <p className="pt-3 text-slate-400">18 mars 2023</p>
            <div className="p-3 rounded-md text-center bg-slate-500 font-bold mt-3">
              <Link href="/" className="mt-6 text-center text-white">
                Lire maintenant
              </Link>
            </div>
          </div>
          <div className="bg-slate-600  p-3 rounded-md sm:w-80">
            <Image src={e2} alt="articles" className="rounded-md" />
            <h2 className="text-xl pt-3 text-white">
              Créer des disgns modernes avec Figma (part 2)
            </h2>
            <p className="pt-3 text-slate-400">20 mars 2023</p>
            <div className="p-3 rounded-md text-center bg-slate-500 font-bold mt-3">
              <Link href="/" className="mt-6 text-center text-white">
                Lire maintenant
              </Link>
            </div>
          </div>
          <div className="bg-slate-600  p-3 rounded-md sm:w-80">
            <Image src={e3} alt="articles" className="rounded-md" />
            <h2 className="text-xl pt-3 text-white">
              Créer des disgns modernes avec Figma
            </h2>
            <p className="pt-3 text-slate-400">18 mars 2023</p>
            <div className="p-3 rounded-md text-center bg-slate-500 font-bold mt-3">
              <Link href="/" className="mt-6 text-center text-white">
                Lire maintenant
              </Link>
            </div>
          </div>
        </div>
      </section>
      <footer className="h-70 p-8 bg-gray-800 sm:flex justify-between">
        <div className="flex-1 ">
          <h3 className="sm:text-3xl font-bold text-red-50">TechWriter</h3>
          <p className="text-slate-300 pt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium quos enim corporis amet quia repudiandae delectus Lorem
            ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>

        <div className="flex-1 flex justify-center items-center mt-4 gap-5">
          <div className="w-10 bg-slate-500 h-10 rounded-full justify-center items-center flex text-white cursor-pointer hover:bg-slate-600 hover:transition-all transition">
            <FaFacebook />
          </div>
          <div className="w-10 bg-slate-500 h-10 rounded-full justify-center items-center flex text-white hover:bg-slate-600 hover:transition-all transition">
            <FaTwitter />
          </div>
          <div className="w-10 bg-slate-500 h-10 rounded-full justify-center items-center flex text-white hover:bg-slate-600 hover:transition-all transition">
            <FaInstagram />
          </div>
        </div>
      </footer>
    </main>
  );
}
