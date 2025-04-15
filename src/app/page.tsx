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
          <header className="px-4 lg:px-6 h-16 flex items-center border border-gray-200 w-screen fixed bg-white">
            <Link className="flex items-center justify-center " href="#home">
              <span className="font-bold text-2xl bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent">
                Semantic
              </span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
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
              <LanguageSelector />
            </nav>
          </header>

          <main className="flex-1">
            <section
              className="w-full flex items-center justify-center flex items-center justify-center py-12 md:py-24 lg:py-32 xl:py-48"
              id="home"
            >
              <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                        {t("headline")}
                      </h1>
                      <p className="max-w-[600px] text-gray-500 md:text-xl">
                        {t("description")}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                      <Link href="#contact">
                        <button className="inline-flex h-10 items-center justify-center rounded-md px-8 bg-black text-white hover:bg-black/80 hover:cursor-pointer">
                          {t("getStarted")}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                      </Link>
                      <Link href="#services">
                        <button className="inline-flex h-10 items-center justify-center rounded-md px-8 bg-transparent border border-gray-200 text-black hover:bg-gray-100 hover:cursor-pointer">
                          {t("learnMore")}
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/semantic/img/CodeImage.jpg"
                      width={550}
                      height={550}
                      alt="Hero Image"
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section
              className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32 bg-gray-50/90"
              id="services"
            >
              <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-black text-white px-3 py-1 text-sm text-primary-foreground">
                      {t("servicesTitle")}
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                      {t("servicesSubtitle")}
                    </h2>
                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      {t("servicesDescription")}
                    </p>
                  </div>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                  <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 p-6 shadow-sm">
                    <div className="rounded-full bg-gray-200 p-4">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">
                      {t("customDevelopment")}
                    </h3>
                    <p className="text-center text-gray-500">
                      {t("customDevelopmentDesc")}
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 p-6 shadow-sm">
                    <div className="rounded-full bg-gray-200 p-4">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">
                      {t("webApplications")}
                    </h3>
                    <p className="text-center text-gray-500">
                      {t("webApplicationsDesc")}
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 p-6 shadow-sm">
                    <div className="rounded-full bg-gray-200 p-4">
                      <Layers className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{t("apiDevelopment")}</h3>
                    <p className="text-center text-gray-500">
                      {t("apiDevelopmentDesc")}
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 p-6 shadow-sm">
                    <div className="rounded-full bg-gray-200 p-4">
                      <Database className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">
                      {t("databaseSolutions")}
                    </h3>
                    <p className="text-center text-gray-500">
                      {t("databaseSolutionsDesc")}
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 p-6 shadow-sm">
                    <div className="rounded-full bg-gray-200 p-4">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">
                      {t("teamAugmentation")}
                    </h3>
                    <p className="text-center text-gray-500">
                      {t("teamAugmentationDesc")}
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 p-6 shadow-sm">
                    <div className="rounded-full bg-gray-200 p-4">
                      <Smartphone className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{t("mobileApps")}</h3>
                    <p className="text-center text-gray-500">
                      {t("mobileAppsDesc")}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section
              className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32"
              id="approach"
            >
              <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                        {t("approachTitle")}
                      </h2>
                      <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        {t("approachDescription")}
                      </p>
                    </div>
                    <ul className="grid gap-4">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>{t("approachPoint1")}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>{t("approachPoint2")}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>{t("approachPoint3")}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>{t("approachPoint4")}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>{t("approachPoint5")}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/img/CoderImage.jpeg"
                      width={600}
                      height={400}
                      alt="Our Approach"
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Testimonials

            <section className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32 bg-gray-50/90">
              <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                      {t("testimonialsTitle")}
                    </h2>
                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      {t("testimonialsDescription")}
                    </p>
                  </div>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                  <div className="flex flex-col justify-between rounded-lg border border-gray-200 p-6 shadow-sm">
                    <div className="space-y-2">
                      <p className="text-gray-500">
                        "Semantic transformed our business with a custom CRM
                        that perfectly fits our workflow. Their team was
                        professional and delivered on time."
                      </p>
                    </div>
                    <div className="flex items-center space-x-4 pt-4">
                      <div className="rounded-full bg-muted p-1">
                        <div className="h-8 w-8 rounded-full bg-gray-200" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Sarah Johnson</p>
                        <p className="text-xs text-gray-500">CEO, TechCorp</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between rounded-lg border border-gray-200 p-6 shadow-sm">
                    <div className="space-y-2">
                      <p className="text-gray-500">
                        "Working with Semantic was a game-changer for our
                        startup. They understood our vision and built a scalable
                        platform that's growing with us."
                      </p>
                    </div>
                    <div className="flex items-center space-x-4 pt-4">
                      <div className="rounded-full bg-muted p-1">
                        <div className="h-8 w-8 rounded-full bg-gray-200" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Michael Chen</p>
                        <p className="text-xs text-gray-500">
                          Founder, InnovateLabs
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between rounded-lg border border-gray-200 p-6 shadow-sm">
                    <div className="space-y-2">
                      <p className="text-gray-500">
                        "The team at Semantic not only delivered exceptional
                        code but also provided valuable insights that improved
                        our product strategy."
                      </p>
                    </div>
                    <div className="flex items-center space-x-4 pt-4">
                      <div className="rounded-full bg-muted p-1">
                        <div className="h-8 w-8 rounded-full bg-gray-200" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Emily Rodriguez</p>
                        <p className="text-xs text-gray-500">CTO, DataFlow</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            */}
            <section
              className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32 bg-gray-50/90"
              id="contact"
            >
              <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                      {t("contactTitle")}
                    </h2>
                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      {t("contactDescription")}
                    </p>
                  </div>
                  <div className="mx-auto w-full max-w-sm space-y-2">
                    <form className="grid gap-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="first-name"
                          >
                            {t("firstName")}
                          </label>
                          <input
                            className="flex h-10 w-full rounded-md border border-gray-200 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="first-name"
                            placeholder={t("firstNamePlaceholder")}
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="last-name"
                          >
                            {t("lastName")}
                          </label>
                          <input
                            className="flex h-10 w-full rounded-md border border-gray-200 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="last-name"
                            placeholder={t("lastNamePlaceholder")}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          htmlFor="email"
                        >
                          {t("email")}
                        </label>
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-200 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          id="email"
                          placeholder={t("emailPlaceholder")}
                          type="email"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          htmlFor="message"
                        >
                          {t("message")}
                        </label>
                        <textarea
                          className="flex min-h-[100px] w-full rounded-md border border-gray-200 border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          id="message"
                          placeholder={t("messagePlaceholder")}
                        />
                      </div>
                      <button className="w-full bg-black text-white hover:bg-black/80 hover:cursor-pointer p-2 rounded-lg">
                        {t("sendMessage")}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full px-4 md:px-6">
            <p className="text-xs text-gray-500">{t("copyright")}</p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
              <Link
                className="text-xs hover:underline underline-offset-4"
                href="#"
              >
                {t("terms")}
              </Link>
              <Link
                className="text-xs hover:underline underline-offset-4"
                href="#"
              >
                {t("privacy")}
              </Link>
            </nav>
          </footer>
        </div>
      </div>
    </>
  );
}
