"use client";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Code,
  Database,
  Globe,
  Layers,
  Users,
  Smartphone,
} from "lucide-react";

import { LanguageSelector } from "../components/LanguageSelector";
import { useTranslation } from "../../hooks/useTranslation";
import { useLanguage } from "../../hooks/useLanguage";
import { Loading } from "../components/Loading";

export default function LandingPage() {
  const { t } = useTranslation();
  const { isLoading } = useLanguage();

  return (
    <>
      <Loading isLoading={isLoading} />
      <div className={`page-content ${isLoading ? "loading" : ""}`}>
        <div className="flex min-h-screen flex-col">
          {/* Header */}
          <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-200 w-full fixed bg-white z-50">
            <Link className="flex items-center justify-center" href="#home">
              <span className="font-bold text-2xl bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent">
                Semantic
              </span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
              <div className="hidden sm:flex gap-4">
                <Link
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="#services"
                >
                  {t("servicesNav")}
                </Link>
                <Link
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="#approach"
                >
                  {t("aboutNav")}
                </Link>
                <Link
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="#contact"
                >
                  {t("contactNav")}
                </Link>
              </div>
              <LanguageSelector />
            </nav>
          </header>

          <main className="flex-1 mt-16">
            {/* Hero Section */}
            <section
              className="w-full px-4 py-12 md:py-24 lg:py-32 min-h-screen"
              id="home"
            >
              <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                      {t("headline")}
                    </h1>
                    <p className="mt-4 text-gray-500 text-lg md:text-xl">
                      {t("description")}
                    </p>
                    <div className="w-full mt-8 lg:mt-0">
                      <Image
                        src="/img/CodeImage.jpg"
                        width={600}
                        height={600}
                        alt="Hero Image"
                        className="rounded-lg object-cover w-full h-auto bg-gray-200 block md:hidden"
                      />
                    </div>
                    <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <Link href="#contact">
                        <button className="w-full sm:w-auto flex items-center justify-center px-8 py-3 bg-black text-white rounded-md hover:bg-black/80 transition-colors">
                          {t("getStarted")}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                      </Link>
                      <Link href="#services">
                        <button className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-gray-200 rounded-md hover:bg-gray-100 transition-colors">
                          {t("learnMore")}
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="w-3/4 mt-8 lg:mt-0">
                    <Image
                      src="/img/CodeImage.jpg"
                      width={600}
                      height={600}
                      alt="Hero Image"
                      className="rounded-lg object-cover w-full h-auto bg-gray-200 hidden md:block"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section className="w-full py-12 md:py-24 bg-gray-50" id="services">
              <div className="container px-4 mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-block bg-black text-white px-4 py-2 rounded-lg mb-4">
                    {t("servicesTitle")}
                  </div>
                  <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-4">
                    {t("servicesSubtitle")}
                  </h2>
                  <p className="text-gray-500 max-w-2xl mx-auto">
                    {t("servicesDescription")}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Custom Development */}
                  <div className="p-6 rounded-lg border border-gray-200 bg-white">
                    <div className="bg-gray-100 p-3 rounded-full w-max mb-4">
                      <Code className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      {t("customDevelopment")}
                    </h3>
                    <p className="text-gray-500">
                      {t("customDevelopmentDesc")}
                    </p>
                  </div>

                  {/* Web Applications */}
                  <div className="p-6 rounded-lg border border-gray-200 bg-white">
                    <div className="bg-gray-100 p-3 rounded-full w-max mb-4">
                      <Globe className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      {t("webApplications")}
                    </h3>
                    <p className="text-gray-500">{t("webApplicationsDesc")}</p>
                  </div>

                  {/* API Development */}
                  <div className="p-6 rounded-lg border border-gray-200 bg-white">
                    <div className="bg-gray-100 p-3 rounded-full w-max mb-4">
                      <Layers className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      {t("apiDevelopment")}
                    </h3>
                    <p className="text-gray-500">{t("apiDevelopmentDesc")}</p>
                  </div>

                  {/* Database Solutions */}
                  <div className="p-6 rounded-lg border border-gray-200 bg-white">
                    <div className="bg-gray-100 p-3 rounded-full w-max mb-4">
                      <Database className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      {t("databaseSolutions")}
                    </h3>
                    <p className="text-gray-500">
                      {t("databaseSolutionsDesc")}
                    </p>
                  </div>

                  {/* Team Augmentation */}
                  <div className="p-6 rounded-lg border border-gray-200 bg-white">
                    <div className="bg-gray-100 p-3 rounded-full w-max mb-4">
                      <Users className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      {t("teamAugmentation")}
                    </h3>
                    <p className="text-gray-500">{t("teamAugmentationDesc")}</p>
                  </div>

                  {/* Mobile Apps */}
                  <div className="p-6 rounded-lg border border-gray-200 bg-white">
                    <div className="bg-gray-100 p-3 rounded-full w-max mb-4">
                      <Smartphone className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      {t("mobileApps")}
                    </h3>
                    <p className="text-gray-500">{t("mobileAppsDesc")}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Approach Section */}
            <section className="w-full py-12 md:py-24" id="approach">
              <div className="container px-4 mx-auto">
                <div className="w-full flex justify-center">
                  <div className="inline-block bg-black text-white px-4 py-2 rounded-lg mb-4">
                    {t("approachTitle")}
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-12">
                  <div className="lg:w-1/2 order-2 lg:order-1">
                    <p className="text-gray-500 mb-6">
                      {t("approachDescription")}
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-black" />
                        <span>{t("approachPoint1")}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-black" />
                        <span>{t("approachPoint2")}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-black" />
                        <span>{t("approachPoint3")}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-black" />
                        <span>{t("approachPoint4")}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-black" />
                        <span>{t("approachPoint5")}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full md:w-1/2 order-1 lg:order-2">
                    <Image
                      src="/img/CoderImage.jpeg"
                      width={600}
                      height={400}
                      alt="Our Approach"
                      className="rounded-lg object-cover w-full h-auto bg-gray-200"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="w-full py-12 md:py-24 bg-gray-50" id="contact">
              <div className="container px-4 mx-auto">
                <div className="max-w-2xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-4 sm:text-4xl">
                    {t("contactTitle")}
                  </h2>
                  <p className="text-gray-500 mb-8">
                    {t("contactDescription")}
                  </p>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-left mb-2">
                          {t("firstName")}
                        </label>
                        <input
                          className="w-full px-4 py-3 border border-gray-200 rounded-md"
                          placeholder={t("firstNamePlaceholder")}
                        />
                      </div>
                      <div>
                        <label className="block text-left mb-2">
                          {t("lastName")}
                        </label>
                        <input
                          className="w-full px-4 py-3 border border-gray-200 rounded-md"
                          placeholder={t("lastNamePlaceholder")}
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-left mb-2">
                          {t("email")}
                        </label>
                        <input
                          className="w-full px-4 py-3 border border-gray-200 rounded-md"
                          placeholder={t("emailPlaceholder")}
                          type="email"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-left mb-2">
                          {t("message")}
                        </label>
                        <textarea
                          className="w-full px-4 py-3 border border-gray-200 rounded-md min-h-[150px]"
                          placeholder={t("messagePlaceholder")}
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-black text-white py-3 rounded-md hover:bg-black/80 transition-colors"
                    >
                      {t("sendMessage")}
                    </button>
                  </form>
                </div>
              </div>
            </section>
          </main>

          {/* Footer */}
          <footer className="py-8 px-4">
            <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center">
              <p className="text-gray-500 text-sm mb-4 sm:mb-0">
                {t("copyright")}
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
