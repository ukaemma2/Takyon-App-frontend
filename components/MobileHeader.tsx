import Link from "next/link";
import Image from 'next/image'
import React, { Fragment } from "react";
import { IoMdClose, IoIosMenu } from "react-icons/io";
import logo from './../public/logo.svg';
import menue from './../public/menu.svg';


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
      {!openMenu && (
        <header className="tw-flex tw-justify-between">
         <Image src={logo} width={0} height={50} alt='logo' />
          <button
            className="tw-bg-takyon-blue-100 tw-rounded-full tw-p-1"
            onClick={() => setOpenMenu(true)}
          >
            <Image src={menue} width={0} height={50} alt='menue' />
          </button>
        </header>
      )}
      {openMenu && (
        <header className="tw-bg-takyon-blue-100 tw-fixed tw-top-0 tw-right-0 tw-left-0 tw-bottom-0 tw-p-4">
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
                <a className="btn border-button tw-text-white tw-capitalize tw-mr-3 hover:tw-opacity-50">
                  log in
                </a>
              </Link>
              <Link href="/sign-up">
                <a className="btn white-button tw-capitalize tw-ml-3 hover:tw-opacity-50">
                  sign up
                </a>
              </Link>
            </div>
          </nav>
        </header>
      )}
    </Fragment>
  );
}