// @ts-nocheck
import React, { useState } from "react";
import Leftbar from "../layout/Leftbar";
import Topbar from "../layout/Topbar";
import { error_toaster, success_toaster } from "../../toaster/Toaster";
import { PostApi } from "../../../ApiClient/PostApi";
import useFetch from "../../../ApiClient/GetApi";
import { Loader2 } from "../../loader/Loader";
import { useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
} from "@chakra-ui/react";
export default function AddPrice() {
  const { data, reFetch } = useFetch("volumetric_weight_data");
  const countries = useFetch("active_countries");
  const active_companies = useFetch("active_companies");
  const {
    isOpen: VolumetricOpen,
    onOpen: VolumetriconOpen,
    onClose: VolumetriconClose,
  } = useDisclosure();
  const {
    isOpen: AirportOpen,
    onOpen: AirportOnOpen,
    onClose: AirportOnClose,
  } = useDisclosure();
  const {
    isOpen: HsCodeOpen,
    onOpen: HsCodeOnOpen,
    onClose: HsCodeOnClose,
  } = useDisclosure();
  const {
    isOpen: CountryOpen,
    onOpen: CountryOnOpen,
    onClose: CountryOnClose,
  } = useDisclosure();

  const [loading, SetLoading] = useState(false);
  const [name, setName] = useState("");
  const [rangeFrom, setRangeFrom] = useState("");
  const [rangeTo, setRangeTo] = useState("");
  const [unit, setUnit] = useState("");
  const [price, setPrice] = useState("");
  const [id, setId] = useState("");
  const [country, setCountry] = useState("");
  const [airport, setAirport] = useState("");
  const [update, setUpdate] = useState(false);

  const onChange = (value, name) => {
    if (name === "rangeTo") {
      if (!Number(value)) {
        return;
      } else if (value.length > 10) {
        return;
      } else {
        setRangeTo(value);
      }
    }
    if (name === "rangeFrom") {
      if (!Number(value)) {
        return;
      } else if (value.length > 10) {
        return;
      } else {
        setRangeFrom(value);
      }
    }
    if (name === "price") {
      if (!Number(value)) {
        return;
      } else if (value.length > 10) {
        return;
      } else {
        setPrice(value);
      }
    }
  };
  const update_weight = (obj) => {
    setUpdate(true);
    setName(obj.name);
    setRangeFrom(obj.rangeFrom);
    setRangeTo(obj.rangeTo);
    setUnit(obj.unit);
    setPrice(obj.price);
    setId(obj.id);
    VolumetriconOpen();
  };
  const add_volumetric_open = () => {
    setUpdate(false);
    empty_input_fields();
    VolumetriconOpen();
  };
  const add_weight_price = async () => {
    SetLoading(true);
    const res = await PostApi("add_weight_price", {
      name: name,
      rangeFrom: rangeFrom,
      rangeTo: rangeTo,
      price: price,
      unit: unit,
    });
    if (res.data.status === "1") {
      SetLoading(false);
      success_toaster(res.data.message);
      VolumetriconClose();
      reFetch();
      empty_input_fields();
      SetLoading(false);
    } else {
      error_toaster(res.data.message);
      SetLoading(false);
    }
  };
  const update_weight_post = async () => {
    SetLoading(true);
    const res = await PostApi("update_weight_price", {
      id: id,
      name: name,
      rangeFrom: rangeFrom,
      rangeTo: rangeTo,
      price: price,
      unit: unit,
    });
    if (res.data.status === "1") {
      SetLoading(false);
      success_toaster(res.data.message);
      VolumetriconClose();
      reFetch();
      empty_input_fields();
      SetLoading(false);
    } else {
      error_toaster(res.data.message);
      SetLoading(false);
    }
  };
  const remove_weight_price = async (id) => {
    SetLoading(true);
    const res = await PostApi("remove_weight_price", {
      id: id,
    });
    if (res.data.status === "1") {
      SetLoading(false);
      error_toaster(res.data.message);
      reFetch();
      SetLoading(false);
    } else {
      error_toaster(res.data.message);
      SetLoading(false);
    }
  };

  const add_airport_open = () => {
    setUpdate(false);
    empty_input_fields();
    AirportOnOpen();
  };

  const add_destination_price = async () => {
    if (airport === "") {
      error_toaster("Company is required!");
      return false;
    }

    if (country === "") {
      error_toaster("Country is required!");
      return false;
    }

    if (price === "") {
      error_toaster("Tax is required!");
      return false;
    }

    SetLoading(true);
    const res = await PostApi("add_company_country_tax", {
      country: country,
      tax: price,
      company: airport,
    });

    if (res.data.status === "1") {
      SetLoading(false);
      success_toaster(res.data.message);
      reFetch();
      AirportOnClose();
      SetLoading(false);
    } else {
      error_toaster(res.data.message);
      SetLoading(false);
    }
  };
  const update_destination_price = (obj) => {
    setUpdate(true);

    setCountry(obj.Country.id);
    setAirport(obj.Company.id);
    setId(obj.id);
    setPrice(obj.tax);
    AirportOnOpen();
  };

  const update_destination_price_post = async () => {
    SetLoading(true);
    const res = await PostApi("update_destination_price", {
      id: id,
      country: country,
      tax: price,
      company: airport,
    });
    if (res.data.status === "1") {
      SetLoading(false);
      success_toaster(res.data.message);
      reFetch();
      AirportOnClose();
      SetLoading(false);
    } else {
      error_toaster(res.data.message);
      SetLoading(false);
    }
  };
  const remove_destination_price = async (id) => {
    SetLoading(true);
    const res = await PostApi("remove_destination_price", {
      id: id,
    });
    if (res.data.status === "1") {
      SetLoading(false);
      error_toaster(res.data.message);
      reFetch();
      SetLoading(false);
    } else {
      error_toaster(res.data.message);
      SetLoading(false);
    }
  };
  const remove_hs_code = async (id) => {
    SetLoading(true);
    const res = await PostApi("remove_hs_code", {
      HsCodeId: id,
    });
    if (res.data.status === "1") {
      SetLoading(false);
      error_toaster(res.data.message);
      reFetch();
      SetLoading(false);
    } else {
      error_toaster(res.data.message);
      SetLoading(false);
    }
  };
  const remove_country_price = async (id) => {
    SetLoading(true);
    const res = await PostApi("block_country_price", {
      id: id,
    });
    if (res.data.status === "1") {
      SetLoading(false);
      error_toaster(res.data.message);
      reFetch();
      SetLoading(false);
    } else {
      error_toaster(res.data.message);
      SetLoading(false);
    }
  };
  const add_hscode_open = () => {
    setUpdate(false);
    empty_input_fields();
    HsCodeOnOpen();
  };
  const add_countryPrice_open = () => {
    setUpdate(false);
    empty_input_fields();
    CountryOnOpen();
  };
  const add_hs_code = async () => {
    if (name === "") {
      error_toaster("HsCode is required!");
      return false;
    }
    if (country === "") {
      error_toaster("VatTAX is required!");
      return false;
    }
    if (price === "") {
      error_toaster("Import Duty is required!");
      return false;
    }
    if (rangeTo === "") {
      error_toaster("Customer Clearance Fee is required!");
      return false;
    }
    SetLoading(true);
    const res = await PostApi("add_hs_code", {
      HsCode: name,
      vatTax: country,
      importDuty: price,
      customerClearanceFee: rangeTo,
    });
    if (res.data.status === "1") {
      SetLoading(false);
      success_toaster(res.data.message);
      reFetch();
      HsCodeOnClose();
      SetLoading(false);
    } else {
      error_toaster(res.data.message);
      SetLoading(false);
    }
  };

  const update_hs_code = (obj) => {
    setUpdate(true);
    setName(obj.HsCode);
    setCountry(obj.vatTax);
    setPrice(obj.importDuty);
    setRangeTo(obj.customerClearanceFee);
    setId(obj.id);
    HsCodeOnOpen();
  };
  const update_country_price = (obj) => {
    setUpdate(true);
    setCountry(obj.CountryId);
    setPrice(obj.price);
    setId(obj.id);
    CountryOnOpen();
  };

  const update_hs_code_post = async () => {
    SetLoading(true);
    const res = await PostApi("update_hs_code", {
      HsCodeId: id,
      HsCode: name,
      vatTax: country,
      importDuty: price,
      customerClearanceFee: rangeTo,
    });
    if (res.data.status === "1") {
      SetLoading(false);
      success_toaster(res.data.message);
      reFetch();
      HsCodeOnClose();
      SetLoading(false);
    } else {
      error_toaster(res.data.message);
      SetLoading(false);
    }
  };
  const add_country_price = async () => {
    SetLoading(true);
    const res = await PostApi("add_country_price", {
      countryId: country,
      price: price,
    });
    if (res.data.status === "1") {
      SetLoading(false);
      success_toaster(res.data.message);
      reFetch();
      CountryOnClose();
      SetLoading(false);
    } else {
      error_toaster(res.data.message);
      SetLoading(false);
    }
  };
  const update_country_price_post = async () => {
    SetLoading(true);
    const res = await PostApi("update_country_price", {
      countryId: country,
      price: price,
      id: id,
    });
    if (res.data.status === "1") {
      SetLoading(false);
      success_toaster(res.data.message);
      reFetch();
      CountryOnClose();
      SetLoading(false);
    } else {
      error_toaster(res.data.message);
      SetLoading(false);
    }
  };
  const empty_input_fields = () => {
    setName("");
    setRangeFrom("");
    setRangeTo("");
    setPrice("");
    setUnit("");
    setCountry("");
    setAirport("");
  };

  const selectStyle =
    "w-[250px] bg-themeGray px-4 py-3 rounded-md border-none font-normal text-base focus:outline-none cursor-pointer appearance-none";
  return (
    <>
      <Leftbar />
      <Topbar main="Add Price" extend={false} />
      <section className="relative xl:w-[calc(100%-280px)] w-[calc(100%-240px)] top-[148px] py-5 px-10 float-right space-y-8">
        {data.length === 0 ? (
          <Loader2 />
        ) : (
          <>
            {loading ? (
              <Loader2 />
            ) : (
              <div className="grid xl:grid-cols-2 py-8 gap-x-10 gap-y-4 h-full">
                <div className="">
                  <div className="bg-white p-6 space-y-4 rounded-lg h-[400px] flex flex-col justify-between relative">
                    <button
                      onClick={() => add_volumetric_open()}
                      className="absolute top-6 right-6 text-themeBlue py-1 px-10 border border-themeBlue rounded hover:bg-themeBlue hover:text-white cursor-pointer"
                    >
                      + Add New
                    </button>

                    <p className="text-xl font-semibold pt-8">
                      Price from volumetric Weight
                    </p>

                    <div
                      className="w-full mx-auto overflow-y-auto"
                      style={{ maxHeight: "calc(100% - 2rem)" }}
                    >
                      <table className="table-auto w-full">
                        <thead className="">
                          <tr className="text-white bg-themeBlue">
                            <td>Name</td>
                            <td>Range</td>
                            <td>Unit</td>
                            <td>Price</td>
                            <td>Action</td>
                          </tr>
                        </thead>
                        <tbody>
                          {data?.data?.weight_price?.map((price) => (
                            <tr key={price.id}>
                              <td>{price.name}</td>
                              <td>{price.rangeFrom + "-" + price.rangeTo}</td>
                              <td>{price.unit}</td>
                              <td>${price.price}</td>

                              <td className="flex gap-x-4 cursor-pointer">
                                <img
                                  onClick={() => remove_weight_price(price.id)}
                                  src="/images/delete.png"
                                  className="w-4 h-5"
                                  alt="delete"
                                />
                                <img
                                  onClick={() => update_weight(price)}
                                  src="/images/edit.png"
                                  className="w-4 h-5"
                                  alt="edit"
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 space-y-4 rounded-lg h-[400px] flex flex-col justify-between relative">
                  <button
                    onClick={() => add_hscode_open()}
                    className="absolute top-6 right-6 text-themeBlue py-1 px-10 border border-themeBlue rounded hover:bg-themeBlue hover:text-white cursor-pointer"
                  >
                    + Add New
                  </button>

                  <p className="text-xl font-semibold pt-8">Hs Code section</p>

                  <div
                    className="w-full mx-auto overflow-y-auto"
                    style={{ maxHeight: "calc(100% - 2rem)" }}
                  >
                    <table className="table-auto w-full">
                      <thead>
                        <tr className="text-white bg-themeBlue  ">
                          <td>Hs Code</td>
                          <td>VAT Tax</td>
                          <td>Import Duty</td>
                          <td>Clearance Fee</td>
                          <td>Action</td>
                        </tr>
                      </thead>
                      <tbody>
                        {data?.data?.hs_code?.map((price) => (
                          <tr>
                            <td>{price.HsCode}</td>
                            <td>${price.vatTax}</td>
                            <td>${price.importDuty}</td>
                            <td>${price.customerClearanceFee}</td>

                            <td className="flex gap-x-4 cursor-pointer">
                              <img
                                onClick={() => remove_hs_code(price.id)}
                                src="/images/delete.png"
                                className="w-4 h-5"
                                alt="delete"
                              />{" "}
                              <img
                                onClick={() => update_hs_code(price)}
                                src="/images/edit.png"
                                className="w-4 h-5"
                                alt="delete"
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </section>
      <Modal size="3xl" isOpen={HsCodeOpen} onClose={HsCodeOnClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Hs Code Section</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="flex gap-x-2">
              <div>
                <label>HsCode</label>
                <input
                  className="bg-[#F4F7FF] py-3 rounded w-full p-4 focus:outline-themeBlue"
                  placeholder="ETYG-3546"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label>VAT Tax</label>
                <input
                  className="bg-[#F4F7FF] py-3 rounded w-full p-4 focus:outline-themeBlue"
                  placeholder="$50"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>

              <div>
                <label>Import Duty</label>
                <input
                  className="bg-[#F4F7FF] py-3 rounded w-full p-4 focus:outline-themeBlue"
                  placeholder="$50"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div>
                <label>Customer Clearance Fee</label>
                <input
                  className="bg-[#F4F7FF] py-3 rounded w-full p-4 focus:outline-themeBlue"
                  placeholder="$50"
                  value={rangeTo}
                  onChange={(e) => setRangeTo(e.target.value)}
                />
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
            <div className="space-x-2">
              <button
                className="py-1 w-[100px] border border-themeBlue text-themeBlue rounded-lg"
                onClick={HsCodeOnClose}
              >
                Cancel
              </button>
              {update ? (
                <button
                  className="py-1 w-[100px] border bg-themeBlue border-themeBlue text-white rounded-lg"
                  onClick={update_hs_code_post}
                >
                  Update
                </button>
              ) : (
                <button
                  className="py-1 w-[100px] border bg-themeBlue border-themeBlue text-white rounded-lg"
                  onClick={add_hs_code}
                >
                  Save
                </button>
              )}
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal
        size="3xl"
        isOpen={AirportOpen}
        onClose={AirportOnClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Price from Company's countries</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="flex gap-x-2">
              <div>
                <div>
                  <label>Company</label>
                </div>
                <select
                  onChange={(e) => setAirport(e.target.value)}
                  defaultValue={airport}
                  name="bank"
                  id="from"
                  className={selectStyle}
                >
                  <option>Select Company</option>
                  {active_companies?.data?.data?.map((airport) => (
                    <option value={airport.id}>{airport.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <div>
                  <label>Country</label>
                </div>
                <select
                  onChange={(e) => setCountry(e.target.value)}
                  defaultValue={country}
                  name="bank"
                  id="from"
                  className={selectStyle}
                >
                  <option>Select Country</option>
                  {countries?.data?.data?.map((airport) => (
                    <option value={airport.id}>{airport.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label>Tax</label>
                <input
                  className="bg-[#F4F7FF] py-3 rounded w-full p-4 focus:outline-themeBlue"
                  placeholder="$50"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
            <div className="space-x-2">
              <button
                className="py-1 w-[100px] border border-themeBlue text-themeBlue rounded-lg"
                onClick={AirportOnClose}
              >
                Cancel
              </button>
              {update ? (
                <button
                  className="py-1 w-[100px] border bg-themeBlue border-themeBlue text-white rounded-lg"
                  onClick={update_destination_price_post}
                >
                  Update
                </button>
              ) : (
                <button
                  className="py-1 w-[100px] border bg-themeBlue border-themeBlue text-white rounded-lg"
                  onClick={add_destination_price}
                >
                  Save
                </button>
              )}
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal
        size="3xl"
        isOpen={VolumetricOpen}
        onClose={VolumetriconClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Price from volumetric weight</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="flex gap-x-2">
              <div>
                <label>Name</label>
                <input
                  className="bg-[#F4F7FF] py-3 rounded w-full p-4 focus:outline-themeBlue"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label>Range(From)</label>
                <input
                  type="text"
                  className="bg-[#F4F7FF] py-3 rounded w-full p-4 focus:outline-themeBlue"
                  placeholder="0"
                  value={rangeFrom}
                  name="rangeFrom"
                  onChange={(e) => {
                    if (!Number(e.target.value)) {
                      return;
                    } else if (e.target.value.length > 10) {
                      return;
                    } else {
                      setRangeFrom(e.target.value);
                    }
                  }}
                />
              </div>
              <div>
                <label>Range(To)</label>
                <input
                  type="text"
                  className="bg-[#F4F7FF] py-3 rounded w-full p-4 focus:outline-themeBlue"
                  placeholder="50"
                  value={rangeTo}
                  name="rangeTo"
                  onChange={(e) => {
                    if (!Number(e.target.value)) {
                      return;
                    } else if (e.target.value.length > 10) {
                      return;
                    } else {
                      setRangeTo(e.target.value);
                    }
                  }}
                />
              </div>
              <div>
                <div>
                  <label>Unit</label>
                </div>
                <select
                  onChange={(e) => setUnit(e.target.value)}
                  defaultValue={unit}
                  name="bank"
                  id="from"
                  className={selectStyle}
                >
                  <option>Select Unit</option>
                  {data?.data?.weight_units?.map((unit) => (
                    <option value={unit.unit}>{unit.unit}</option>
                  ))}
                </select>
              </div>
              <div>
                <label>Price</label>
                <input
                  type="text"
                  className="bg-[#F4F7FF] py-3 rounded w-full p-4 focus:outline-themeBlue"
                  placeholder="$50"
                  name="price"
                  value={price}
                  onChange={(e) => {
                    if (!Number(e.target.value)) {
                      return;
                    } else if (e.target.value.length > 10) {
                      return;
                    } else {
                      setPrice(e.target.value);
                    }
                  }}
                />
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
            <div className="space-x-2">
              <button
                className="py-1 w-[100px] border border-themeBlue text-themeBlue rounded-lg"
                onClick={VolumetriconClose}
              >
                Cancel
              </button>
              {update ? (
                <button
                  className="py-1 w-[100px] border bg-themeBlue border-themeBlue text-white rounded-lg"
                  onClick={update_weight_post}
                >
                  Update
                </button>
              ) : (
                <button
                  className="py-1 w-[100px] border bg-themeBlue border-themeBlue text-white rounded-lg"
                  onClick={add_weight_price}
                >
                  Save
                </button>
              )}
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal
        size="3xl"
        isOpen={CountryOpen}
        onClose={CountryOnClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Set Country Price</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="flex gap-x-2">
              <div>
                <div>
                  <label>Country</label>
                </div>
                <select
                  defaultValue={country}
                  onChange={(e) => setCountry(e.target.value)}
                  name="bank"
                  id="from"
                  className={selectStyle}
                >
                  <option>Select Country</option>
                  {countries?.data?.data?.map((country) => (
                    <option key={country.id} value={country.id}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label>Price</label>
                <input
                  className="bg-[#F4F7FF] py-3 rounded w-full p-4 focus:outline-themeBlue"
                  placeholder="$50"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
            <div className="space-x-2">
              <button
                className="py-1 w-[100px] border border-themeBlue text-themeBlue rounded-lg"
                onClick={CountryOnClose}
              >
                Cancel
              </button>
              {update ? (
                <button
                  className="py-1 w-[100px] border bg-themeBlue border-themeBlue text-white rounded-lg"
                  onClick={update_country_price_post}
                >
                  Update
                </button>
              ) : (
                <button
                  className="py-1 w-[100px] border bg-themeBlue border-themeBlue text-white rounded-lg"
                  onClick={add_country_price}
                >
                  Save
                </button>
              )}
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
