import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsSearch } from "react-icons/bs";

export default function Welcome() {
  return (
    <main className="tw-flex tw-px-4 md:tw-px-10 tw-py-5 md:tw-pt-10 tw-gap-4">
      <section className="tw-flex tw-flex-col tw-justify-center md:tw-w-[55%]">
        <div>
          <h1 className="tw-text-white tw-font-black tw-text-4xl md:tw-text-9xl tw-uppercase">
            Takyon
          </h1>
          <div className="md:tw-px-7">
            <h4 className="tw-text-white tw-font-medium tw-text-lg md:tw-text-4xl tw-mt-3">
              Book from the future.
            </h4>
            <p className="tw-text-white">
              Are you ready to book your next stay through NFT? <br />
              Book from the future.
              <Link href="/book">
                <a className="tw-text-takyon-blue-100 hover:tw-opacity-50">
                  {" "}
                  Book with Takyon.
                </a>
              </Link>
            </p>
          </div>
        </div>
        <div className="md:tw-mt-12 tw-mt-7">
          <form className="md:tw-flex tw-justify-between tw-hidden">
            <label className="tw-text-white tw-capitalize tw-font-bold">
              where?
              <input
                type="text"
                placeholder="Mil"
                className="tw-bg-takyon-light-200 tw-rounded-[33px] tw-border tw-border-white tw-mt-3"
              />
              <input
                type="checkbox"
                className="tw-bg-takyon-light-200 tw-border tw-border-white tw-mt-3"
              />
              <span className="tw-font-normal tw-self-end">
                flexible location
              </span>
            </label>
            <label className="tw-text-white tw-capitalize tw-font-bold">
              when?
              <input
                type="text"
                placeholder="check in | check out"
                className="tw-bg-takyon-light-200 tw-rounded-[33px] tw-border tw-border-white tw-mt-3"
              />
              <input
                type="checkbox"
                className="tw-bg-takyon-light-200 tw-border tw-border-white tw-mt-3"
              />
              <span className="tw-font-normal tw-self-end">flexible dates</span>
            </label>
            <label className="tw-text-white tw-capitalize tw-font-bold">
              who?
              <input
                type="text"
                placeholder="Guests"
                className="tw-bg-takyon-light-200 tw-rounded-[33px] tw-border tw-border-white tw-mt-3"
              />
            </label>
            <button className="tw-bg-takyon-blue-100 tw-rounded-full tw-p-2 tw-flex tw-self-end tw-ml-2">
              <BsSearch color="white" size="24" />
            </button>
          </form>
          <form className="md:tw-hidden tw-flex tw-flex-col">
            <h4 className="tw-text-white tw-font-bold">
              Search for your next trip
            </h4>
            <label className="">
              <input
                type="text"
                placeholder="Milano"
                className="tw-bg-takyon-light-200 tw-rounded-[33px] tw-border tw-border-white tw-mt-3 tw-text-white tw-w-full"
              />
            </label>
            <label className="tw-flex tw-gap-5">
              <input
                type="text"
                placeholder="check in"
                className="tw-bg-takyon-light-200 tw-rounded-[33px] tw-border tw-border-white tw-mt-3 tw-text-white tw-w-full"
              />
              <input
                type="text"
                placeholder="check out"
                className="tw-bg-takyon-light-200 tw-rounded-[33px] tw-border tw-border-white tw-mt-3 tw-text-white tw-w-full"
              />
            </label>
            <label className="tw-flex tw-gap-5">
              <input
                type="text"
                placeholder="guests"
                className="tw-bg-takyon-light-200 tw-rounded-[33px] tw-border tw-border-white tw-mt-3 tw-text-white tw-w-full"
              />
              <button className="btn blue-button tw-rounded-[33px] tw-w-full tw-mt-3">
                search for a trip
              </button>
            </label>
          </form>
        </div>
        <div className="tw-mt-2 md:tw-px-5">
          <Image
            src="/polygon-matic.svg"
            alt="polygon"
            width={105}
            height={70}
          />
        </div>
      </section>
      <section className="tw-hidden md:tw-flex tw-justify-center tw-items-start tw-w-[45%]">
        <Image
          src="/marketplace.svg"
          alt="marketplace"
          width={500}
          height={500}
        />
      </section>
    </main>
  );
}
