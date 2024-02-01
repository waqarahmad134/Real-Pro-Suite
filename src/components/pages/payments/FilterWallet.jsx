import React from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import Leftbar from '../layout/Leftbar';
import Topbar from '../layout/Topbar';
import SaleCard from './walletElements/SaleCard'

export default function FilterWallet() {
    const location = useLocation();

    return (
        <>
            <Leftbar />
            <Topbar main="Filter Wallet" extend={false} />
            <section className="relative xl:w-[calc(100%-280px)] w-[calc(100%-240px)] top-[148px] py-5 px-10 float-right space-y-8">
                <div>
                    <div className="col-span-4 bg-white py-8 px-7 space-y-6 rounded-lg">
                        <SaleCard
                            title="Filter Wallet"
                            quantity= {location?.state?.data?.total_earning?.toFixed(1)??"0.00"}
                            sub="Total Income"
                            Icon={FaArrowUp}
                            bgColor="bg-themeGreen2"
                            textColor="text-themeGreen2"
                            percent={75}
                        />


                    </div>
                </div>

            </section>

        </>
    )
}
