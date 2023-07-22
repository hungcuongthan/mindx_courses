"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    fetchProviders();
  }, []);

  return (
    <nav className="flex-between w-full mt-13 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          className="object-contain"
          src="/assets/images/logo.svg"
          width={30}
          height={30}
        ></Image>
        <p className="logo_text">SharePrompts</p>
      </Link>
      {/* PC navigation */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5 ">
            <Link href="/create-prompt" className="black_btn">
              Create Prompt
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Link className="" href="/profile">
              <Image
                src="/assets/images/logo.svg"
                width={37}
                height={37}
                className="rounder-full"
                alt="profile picture"
              ></Image>
            </Link>
          </div>
        ) : (
          <div>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={signIn(provider.id)}
                  className="black_btn"
                ></button>
              ))}
          </div>
        )}
      </div>
      {/* Mobile navigation */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image
              src="/assets/images/logo.svg"
              width={37}
              height={37}
              className="rounder-full"
              alt="profile picture"
              onClick={() => {
                setToggleDropdown((prev) => !prev);
              }}
            ></Image>
            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href={"/profile"}
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href={"/create-prompt"}
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        ) : (
          <div>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={signIn(provider.id)}
                  className="black_btn"
                ></button>
              ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
