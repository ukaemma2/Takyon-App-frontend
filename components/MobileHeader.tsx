import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { IoMdClose, IoIosMenu } from "react-icons/io";
import style from "./header.module.scss";

type MobileHeaderProps = {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function MobileHeader({
  openMenu,
  setOpenMenu,
}: MobileHeaderProps) {
  return (
    <Fragment>
      <div className={style.headerBorderWrapper}>
        <header className="wrapper tw-flex tw-justify-between tw-pt-6 tw-pb-2 tw-px-4 md:tw-pt-10 md:tw-px-10 tw-bg-takyon-blue-300">
          <Image src="/takyon-logo.svg" alt="takyon" width={150} height={50} />
          <nav className="md:tw-flex tw-justify-around tw-hidden tw-self-baseline">
            <Link href="/">
              <a className="active-link tw-mr-3">Explore</a>
            </Link>
            <Link href="/">
              <a className="link tw-mr-3">secondary market</a>
            </Link>
            <Link href="/">
              <a className="link tw-mr-3">super stays</a>
            </Link>
            <Link href="/">
              <a className="link">about us</a>
            </Link>
          </nav>
          <nav className="md:tw-flex tw-justify-around tw-hidden tw-self-baseline">
            <Link href="/login">
              <a className="btn">log in</a>
            </Link>
            <Link href="/signup">
              <a className="btn blue-button">sign up</a>
            </Link>
          </nav>
          <button
            className="tw-bg-takyon-blue-100 tw-rounded-full tw-p-1 tw-flex md:tw-hidden tw-self-baseline"
            onClick={() => setOpenMenu(true)}
          >
            <IoIosMenu color="white" size="28" />
          </button>
        </header>
      </div>
      )
      {openMenu && (
        <header className="tw-bg-takyon-blue-100 tw-fixed tw-top-0 tw-right-0 tw-left-0 tw-bottom-0 tw-p-4 tw-z-10">
          <button
            className="tw-flex tw-justify-end tw-w-full"
            onClick={() => setOpenMenu(false)}
          >
            <IoMdClose color="white" size="24px" />
          </button>
          <nav className="tw-flex tw-flex-col tw-justify-between tw-h-full tw-pb-12">
            <div className="tw-flex tw-flex-col tw-items-center">
              <h1 className="tw-text-white tw-font-extrabold tw-uppercase tw-text-3xl">
                Takyon
              </h1>
              <h3 className="tw-text-white tw-font-medium tw-text-lg">
                Book from the future.
              </h3>
            </div>
            <div className="tw-flex tw-flex-col tw-items-center">
              <Link href="/">
                <a className="tw-capitalize tw-border-b-4 tw-border-white tw-text-white tw-text-2xl tw-font-bold tw-mb-6">
                  explore
                </a>
              </Link>
              <Link href="/">
                <a className="tw-capitalize tw-text-takyon-light-100 tw-text-2xl tw-font-medium tw-mb-6">
                  secondary market
                </a>
              </Link>
              <Link href="/">
                <a className="tw-capitalize tw-text-takyon-light-100 tw-text-2xl tw-font-medium tw-mb-6">
                  super stays
                </a>
              </Link>
              <Link href="/">
                <a className="tw-capitalize tw-text-takyon-light-100 tw-text-2xl tw-font-medium tw-mb-6">
                  about us
                </a>
              </Link>
            </div>
            <div className="tw-flex tw-justify-center">
              <Link href="/login">
                <a className="btn border-button tw-text-white tw-mr-3">
                  log in
                </a>
              </Link>
              <Link href="/signup">
                <a className="btn white-button tw-ml-3">sign up</a>
              </Link>
            </div>
          </nav>
        </header>
      )}
    </Fragment>
  );
}
