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

export default function PriceManagment() {
  const { data, reFetch } = useFetch("get_all_countries");

  const {
    isOpen: DimensionOpen,
    onOpen: DimensionOnOpen,
    onClose: DimensionOnClose,
  } = useDisclosure();
  const {
    isOpen: WeightOpen,
    onOpen: WeightOnOpen,
    onClose: WeightOnClose,
  } = useDisclosure();
  const {
    isOpen: CountryOpen,
    onOpen: CountryOnOpen,
    onClose: CountryOnClose,
  } = useDisclosure();
  const {
    isOpen: AirportOpen,
    onOpen: AirportOnOpen,
    onClose: AirportOnClose,
  } = useDisclosure();
  const [id, setId] = useState("");
  const [unit, setUnit] = useState("");
  const [unitName, setUnitName] = useState("");
  const [country, setCountry] = useState("");
  const [code, setCode] = useState("");
  const [shortName, setShortName] = useState("");
  const [update, setUpdate] = useState(false);
  const [loading, SetLoading] = useState(false);

  const add_dimension_open = () => {
    setUpdate(false);
    empty_input_fields();
    DimensionOnOpen();
  };
  const add_dimension_unit = async () => {
    if (unit === "") {
      error_toaster("Please enter Unit!");
      return false;
    }
    if (unitName === "") {
      error_toaster("Please enter Unit Name!");
      return false;
    }
    SetLoading(true);
    const res = await PostApi("add_dimension_unit", {
      unit: unit,
      unitName: unitName,
    });
    if (res.data.status === "1") {
      SetLoading(false);
      success_toaster(res.data.message);
      DimensionOnClose();
      reFetch();
      empty_input_fields();
      SetLoading(false);
    } else {
      error_toaster(res.data.message);
      SetLoading(false);
    }
  };
  const update_dimesion = async (obj) => {
    setUpdate(true);
    setId(obj.id);
    setUnit(obj.unit);
    setUnitName(obj.unitName);
    DimensionOnOpen();
  };
  const update_dimesion_post = async () => {
    SetLoading(true);
    const res = await PostApi("update_dimesion", {
      id: id,
      unit: unit,
      unitName: unitName,
    });

    if (res.data.status === "1") {
      success_toaster(res.data.message);
      setUpdate(false);

      DimensionOnClose();
      SetLoading(false);
      empty_input_fields();
      reFetch();
    } else {
      error_toaster(res.data.message);

      SetLoading(false);
    }
  };
  const remove_dimension = async (id) => {
    SetLoading(true);
    const res = await PostApi("remove_dimension", {
      id: id,
    });

    if (res.data.status === "1") {
      success_toaster(res.data.message);
      SetLoading(false);
      reFetch();
    } else {
      error_toaster(res.data.message);

      SetLoading(false);
    }
  };

  const add_weight_open = () => {
    WeightOnOpen();
    empty_input_fields();
    setUpdate(false);
  };
  const add_weight_unit = async () => {
    if (unit === "") {
      error_toaster("Please enter Unit!");
      return false;
    }
    if (unitName === "") {
      error_toaster("Please enter Unit Name!");
      return false;
    }
    SetLoading(true);
    const res = await PostApi("add_weight_unit", {
      unit: unit,
      unitName: unitName,
    });
    if (res.data.status === "1") {
      SetLoading(false);
      success_toaster(res.data.message);
      reFetch();
      empty_input_fields();
      WeightOnClose();
    } else {
      SetLoading(false);
      error_toaster(res.data.message);
    }
  };
  const update_weight = async (obj) => {
    setUpdate(true);
    setId(obj.id);
    setUnit(obj.unit);
    setUnitName(obj.unitName);
    WeightOnOpen();
  };

  const update_weight_post = async () => {
    SetLoading(true);
    const res = await PostApi("update_dimesion", {
      id: id,
      unit: unit,
      unitName: unitName,
    });

    if (res.data.status === "1") {
      success_toaster(res.data.message);
      setUpdate(false);
      WeightOnClose();
      SetLoading(false);
      empty_input_fields();
      reFetch();
    } else {
      error_toaster(res.data.message);

      SetLoading(false);
    }
  };

  const add_country_open = () => {
    setUpdate(false);
    empty_input_fields();
    CountryOnOpen();
  };
  const add_countries = async () => {
    if (country === "") {
      error_toaster("Please enter Country Name!");
      return false;
    }
    if (code === "") {
      error_toaster("Please enter Country Code!");
      return false;
    }
    if (shortName === "") {
      error_toaster("Please enter Short Name!");
      return false;
    }
    SetLoading(true);
    const res = await PostApi("add_countries", {
      name: country,
      code: code,
      shortName: shortName,
    });

    if (res.data.status === "1") {
      empty_input_fields();
      success_toaster(res.data.message);
      CountryOnClose();
      reFetch();
      SetLoading(false);
    } else {
      SetLoading(false);
      error_toaster(res.data.message);
    }
  };

  const update_country = (obj) => {
    setCode(obj.code);
    setId(obj.id);
    setCountry(obj.name);
    setShortName(obj.shortName);
    setUpdate(true);
    CountryOnOpen();
  };
  const update_country_post = async () => {
    SetLoading(true);
    const res = await PostApi("update_country", {
      countryId: id,
      name: country,
      code: code,
      shortName: shortName,
    });

    if (res.data.status === "1") {
      empty_input_fields();
      success_toaster(res.data.message);
      SetLoading(false);
      reFetch();
      CountryOnClose();
    } else {
      SetLoading(false);
      error_toaster(res.data.message);
    }
  };
  const remove_country = async (id) => {
    const res = await PostApi("remove_country", {
      countryId: id,
    });

    if (res.data.status === "1") {
      error_toaster(res.data.message);
      reFetch();
    } else {
      error_toaster(res.data.message);
    }
  };

  const add_airport_open = () => {
    setUpdate(false);
    AirportOnOpen();
    empty_input_fields();
  };
  const add_airport = async () => {
    if (country === "") {
      error_toaster("Please select a country!");
      return false;
    }
    SetLoading(true);
    const res = await PostApi("add_airport", {
      name: unitName,
      city: unit,
      CountryId: country,
    });

    if (res.data.status === "1") {
      empty_input_fields();
      success_toaster(res.data.message);
      empty_input_fields();
      SetLoading(false);
      AirportOnClose();
      reFetch();
    } else {
      SetLoading(false);
      error_toaster(res.data.message);
    }
  };
  const update_airport = (obj) => {
    setUnitName(obj.name);
    setUnit(obj.city);
    setId(obj.id);
    setCountry(obj.CountryId);
    setUpdate(true);
    AirportOnOpen();
  };

  const update_airport_post = async () => {
    SetLoading(true);
    const res = await PostApi("update_airport", {
      name: unitName,
      city: unit,
      CountryId: country,
      airportId: id,
    });

    if (res.data.status === "1") {
      empty_input_fields();
      success_toaster(res.data.message);
      reFetch();
      SetLoading(false);
      AirportOnClose();
    } else {
      SetLoading(false);
      error_toaster(res.data.message);
    }
  };
  const remove_airport = async (id) => {
    SetLoading(true);
    const res = await PostApi("remove_airport", {
      airportId: id,
    });

    if (res.data.status === "1") {
      success_toaster(res.data.message);
      SetLoading(false);
      reFetch();
    } else {
      SetLoading(false);
      error_toaster(res.data.message);
    }
  };

  const empty_input_fields = () => {
    setUnit("");
    setUnitName("");
    setCountry("");
    setCode("");
    setShortName("");
  };
  const selectStyle =
    "w-full bg-themeGray px-4 py-3 rounded-md border-none font-normal text-base focus:outline-none cursor-pointer appearance-none";
  return (
    <>
      <Leftbar />
      <Topbar main="Unit Management" extend={false} />

      <section className="relative xl:w-[calc(100%-280px)] w-[calc(100%-240px)] top-[148px] py-5 px-10 float-right space-y-8">
        {data.length === 0 ? (
          <Loader2 />
        ) : (
          <>
            {loading ? (
              <Loader2 />
            ) : (
              <div className="grid xl:grid-cols-2 py-8 gap-x-10 gap-y-4 h-full">
                <div className="bg-white p-6 rounded-lg h-[250px] flex flex-col justify-between">
                  <p className="text-xl font-semibold  p-1  bg-themeBlue text-white rounded shadow-lg">
                    Dimension Units
                  </p>

                  <table className="table-auto">
                    <tbody>
                      {data?.data?.dimension_units?.map((unit) => (
                        <tr>
                          <td className="text-gray-400">{unit.unitName}</td>
                          <td className="font-semibold">{unit.unit}</td>
                          <td className="flex gap-x-2">
                            <img
                              onClick={() => remove_dimension(unit.id)}
                              src="/images/delete.png"
                              className="w-4 h-5"
                              alt="delete"
                            />
                          </td>
                          <td>
                            {" "}
                            <img
                              onClick={() => update_dimesion(unit)}
                              src="/images/edit.png"
                              className="w-5 h-5"
                              alt="delete"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div className="flex justify-end text-red-500 ">
                    <p
                      onClick={add_dimension_open}
                      className="font-semibold border-red-500 p-1 rounded hover:bg-red-500 hover:text-white cursor-pointer border"
                    >
                      + Add Dimension Units
                    </p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg h-[250px] flex flex-col justify-between">
                  <p className="text-xl font-semibold bg-themeBlue text-white p-1 rounded shadow-lg">
                    Weight Units
                  </p>

                  <table className="table-auto">
                    <tbody>
                      {data?.data?.weight_units?.map((unit) => (
                        <tr>
                          <td className="text-gray-400">{unit.unitName}</td>
                          <td className="font-semibold">{unit.unit}</td>
                          <td>
                            <img
                              onClick={() => remove_dimension(unit.id)}
                              src="/images/delete.png"
                              className="w-4 h-5"
                              alt="delete"
                            />
                          </td>
                          <td>
                            {" "}
                            <img
                              onClick={() => update_weight(unit)}
                              src="/images/edit.png"
                              className="w-5 h-5"
                              alt="delete"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div className="flex justify-end text-red-500 ">
                    <p
                      onClick={add_weight_open}
                      className="font-semibold border-red-500 p-1 rounded hover:bg-red-500 hover:text-white cursor-pointer border"
                    >
                      + Add Weight Units
                    </p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg h-[250px] flex flex-col justify-between">
                  <p className="text-xl font-semibold bg-themeBlue text-white p-1 rounded shadow-lg">
                    Countries
                  </p>

                  <table className="table-auto">
                    <tbody>
                      {data?.data?.countries?.map((country) => (
                        <tr>
                          <td>{country.name}</td>
                          <td>{country.code}</td>
                          <td>{country.shortName}</td>
                          <td>
                            {" "}
                            <img
                              onClick={() => remove_country(country.id)}
                              src="/images/delete.png"
                              className="w-4 h-5"
                              alt="delete"
                            />
                          </td>
                          <td>
                            {" "}
                            <img
                              onClick={() => update_country(country)}
                              src="/images/edit.png"
                              className="w-4 h-5"
                              alt="delete"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div className="flex justify-end text-red-500 ">
                    <p
                      onClick={add_country_open}
                      className="font-semibold border-red-500 p-1 rounded hover:bg-red-500 hover:text-white cursor-pointer border"
                    >
                      + Add Country
                    </p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg h-[250px] flex flex-col justify-between">
                  <p className="text-xl font-semibold bg-themeBlue text-white p-1 rounded shadow-lg">
                    Airports
                  </p>
                  <table className="table-auto">
                    <tbody>
                      {data?.data?.airport_units?.map((airport) => (
                        <tr>
                          <td>{airport?.name}</td>
                          <td>{airport?.city}</td>
                          <td>{airport?.Country.name}</td>
                          <td>
                            {" "}
                            <img
                              onClick={() => remove_airport(airport.id)}
                              src="/images/delete.png"
                              className="w-4 h-5"
                              alt="delete"
                            />
                          </td>
                          <td>
                            {" "}
                            <img
                              onClick={() => update_airport(airport)}
                              src="/images/edit.png"
                              className="w-4 h-5"
                              alt="delete"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="flex justify-end text-red-500">
                    <p
                      onClick={() => add_airport_open()}
                      className="font-semibold border-red-500 p-1 rounded hover:bg-red-500 hover:text-white cursor-pointer border"
                    >
                      + Add Airport
                    </p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </section>

      <Modal size="xl" isOpen={CountryOpen} onClose={CountryOnClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Countries</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="flex gap-x-2">
              <div>
                <input
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="bg-[#F4F7FF] py-3 rounded w-full p-4 focus:outline-themeBlue"
                  placeholder="Country Name"
                />
              </div>
              <div>
                <input
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="bg-[#F4F7FF] py-3 rounded w-full p-4 focus:outline-themeBlue"
                  placeholder="Country Code"
                />
              </div>
              <div>
                <input
                  value={shortName}
                  onChange={(e) => setShortName(e.target.value)}
                  className="bg-[#F4F7FF] py-3 rounded w-full p-4 focus:outline-themeBlue"
                  placeholder="Short Name"
                />
              </div>
            </div>
            {/* <div className="flex flex-wrap gap-x-2 gap-y-3 my-3">
              {data?.data?.countries?.map((country) => (
                <div
                  className="flex items-center px-2 bg-[#F4F7FF] rounded-xl py-1 gap-x-1"
                  key={country.id}
                >
                  <p className=" text-sm ">{country.name}</p>
                  <img
                    onClick={() => remove_country(country.id)}
                    className="w-[15px] h-[15px] cursor-pointer"
                    src="/images/cross.png"
                    alt="cross"
                  />
                </div>
              ))}
            </div> */}
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
                  onClick={update_country_post}
                >
                  Update
                </button>
              ) : (
                <button
                  className="py-1 w-[100px] border bg-themeBlue border-themeBlue text-white rounded-lg"
                  onClick={add_countries}
                >
                  Save
                </button>
              )}
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal
        size="xl"
        isOpen={DimensionOpen}
        onClose={DimensionOnClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Dimension Units</ModalHeader>

          <ModalCloseButton />
          {loading ? (
            <Loader2 />
          ) : (
            <>
              <ModalBody>
                <div className="flex gap-x-2">
                  <div>
                    <div>
                      <label>Unit #</label>
                    </div>
                    <input
                      onChange={(e) => setUnitName(e.target.value)}
                      className="bg-[#F4F7FF] py-3 rounded w-full p-4 focus:outline-themeBlue"
                      placeholder="Unit 01"
                      value={unitName}
                    />
                  </div>
                  <div>
                    <div>
                      <label>Unit Name</label>
                    </div>
                    <input
                      onChange={(e) => setUnit(e.target.value)}
                      className="bg-[#F4F7FF] py-3 rounded p-4 w-full focus:outline-themeBlue"
                      placeholder="Cm"
                      value={unit}
                    />
                  </div>
                </div>
              </ModalBody>

              <ModalFooter>
                <div className="space-x-2">
                  <button
                    className="py-1 w-[100px] border border-themeBlue text-themeBlue rounded-lg"
                    onClick={DimensionOnClose}
                  >
                    Cancel
                  </button>
                  {update ? (
                    <button
                      className="py-1 w-[100px] border bg-themeBlue border-themeBlue text-white rounded-lg"
                      onClick={update_dimesion_post}
                    >
                      Update
                    </button>
                  ) : (
                    <button
                      className="py-1 w-[100px] border bg-themeBlue border-themeBlue text-white rounded-lg"
                      onClick={add_dimension_unit}
                    >
                      Save
                    </button>
                  )}
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal size="xl" isOpen={WeightOpen} onClose={WeightOnClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Weight Units</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="flex gap-x-2">
              <div>
                <div>
                  <label>Unit #</label>
                </div>
                <input
                  onChange={(e) => setUnitName(e.target.value)}
                  className="bg-[#F4F7FF] py-3 rounded w-full p-4 focus:outline-themeBlue"
                  placeholder="Unit 01"
                  value={unitName}
                />
              </div>
              <div>
                <div>
                  <label>Unit Name</label>
                </div>
                <input
                  onChange={(e) => setUnit(e.target.value)}
                  className="bg-[#F4F7FF] py-3 rounded p-4 w-full focus:outline-themeBlue"
                  placeholder="Kg"
                  value={unit}
                />
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
            <div className="space-x-2">
              <button
                className="py-1 w-[100px] border border-themeBlue text-themeBlue rounded-lg"
                onClick={WeightOnClose}
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
                  onClick={add_weight_unit}
                >
                  Save
                </button>
              )}
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal size="xl" isOpen={AirportOpen} onClose={AirportOnClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Airport</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="flex gap-x-2">
              <div>
                <div>
                  <label>AirPort</label>
                </div>
                <input
                  onChange={(e) => setUnitName(e.target.value)}
                  className="bg-[#F4F7FF] py-3 rounded w-full p-4 focus:outline-themeBlue"
                  placeholder="AirPort"
                  value={unitName}
                />
              </div>
              <div>
                <div>
                  <label>City</label>
                </div>
                <input
                  onChange={(e) => setUnit(e.target.value)}
                  className="bg-[#F4F7FF] py-3 rounded w-full p-4 focus:outline-themeBlue"
                  placeholder="AirPort"
                  value={unit}
                />
              </div>
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
                  <option>Select an Airport</option>
                  {data?.data?.countries?.map((country) => (
                    <option key={country.id} value={country.id}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* <div className="flex flex-wrap gap-x-2 gap-y-3 my-3">
              {data?.data?.airports?.map((country) => (
                <div
                  key={country.id}
                  className="flex items-center px-2 bg-[#F4F7FF] rounded-xl py-1 gap-x-1"
                >
                  <p className=" text-sm ">{country.name}</p>
                  <img
                    onClick={() => remove_airport(country.id)}
                    className="w-[15px] h-[15px] cursor-pointer"
                    src="/images/cross.png"
                    alt="cross"
                  />
                </div>
              ))}
            </div> */}
          </ModalBody>

          <ModalFooter>
            <div className="flex justify-around items-center w-full">
              <div>
                <button
                  className="py-1 w-[100px] border border-themeBlue text-themeBlue rounded-lg"
                  onClick={AirportOnClose}
                >
                  Cancel
                </button>
              </div>
              <div>
                {update ? (
                  <button
                    className="py-1 w-[100px] border bg-themeBlue border-themeBlue text-white rounded-lg"
                    onClick={update_airport_post}
                  >
                    Update
                  </button>
                ) : (
                  <button
                    className="py-1 w-[100px] border bg-themeBlue border-themeBlue text-white rounded-lg"
                    onClick={add_airport}
                  >
                    Save
                  </button>
                )}
              </div>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
