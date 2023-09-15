import React, {useCallback} from 'react';
import {useRouter} from "next/router";
import {FaFeather} from "react-icons/fa";
import {useSetRecoilState} from "recoil";
import {loginModalAtom} from "@/store/modalAtom";

const SidebarTweetButton = () => {
    const setLoginIsOpen = useSetRecoilState(loginModalAtom)
    const router = useRouter();
    const onClick = useCallback(() => {
        setLoginIsOpen({isOpen: true});
    }, [setLoginIsOpen]);
    return (
        <div onClick={onClick}>
            <div className="mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center bg-sky-500 hover:bg-opacity-50 transition cursor-pointer">
                <FaFeather size={24} color="white"/>
            </div>
            <div className="mt-6 hidden lg:block rounded-full px-4 py-2 flex bg-sky-500 hover:bg-opacity-90 transition cursor-pointer">
                <p className="hidden lg:block text-center font-semibold text-white text-[20px]">Tweet</p>
            </div>
        </div>
    );
};

export default SidebarTweetButton;