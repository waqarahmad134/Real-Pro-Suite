import { Column } from 'primereact/column';
import { TreeTable } from 'primereact/treetable';
import React, { useEffect, useState } from 'react';
import useFetch from '../ApiClient/GetApi';
import { PostApi } from '../ApiClient/PostApi';
import { error_toaster, success_toaster } from '../components/toaster/Toaster';
import DefaultLayout from '../layout/DefaultLayout';
import Loader from '../components/loader/Loader';
import formatDate from '../Utils/dateformat';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
} from '@chakra-ui/react';

export default function Offices() {
  const { data, reFetch } = useFetch('dashboard/v1/allOffices');
  const [nodes, setNodes] = useState([]);
  useEffect(() => {
    if (data && data.data) {
      const offices = data.data;

      const formattedNodes = offices.map((office) => ({
        data: {
          name: office.officeName,
          establishedDate: formatDate(office.dateEstablished),
          franchiseName: office.franchiseName,
          employeeCapacity: office.employeeCapacity,
          status: office.franchiseNetwork === true ? 'True' : 'False',
        },
      }));
      setNodes(formattedNodes);
    }
  }, [data]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  const [model, setModel] = useState(false);

  const [addOffice, setaddOffice] = useState({
    franchiseName: '',
    officeName: '',
    officeRosterLink: '',
    employeeCapacity: '',
    complianceWithFranchiseStandards: false,
    franchiseNetwork: false,
    dateEstablished: '',
    officeHistory: '',
  });

  const onChange = (e) => {
    setaddOffice({ ...addOffice, [e.target.name]: e.target.value });
  };
  const addOfficeFunc = async (e) => {
    e.preventDefault();
    if (addOffice?.franchiseName === '') {
      error_toaster('Please Add Franchise Name');
    } else if (addOffice?.officeName === '') {
      error_toaster('Please Add Office Name');
    } else if (addOffice?.officeRosterLink === '') {
      error_toaster('Please enter Office Roaster Link');
    } else if (addOffice?.employeeCapacity === '') {
      error_toaster('Please enter Office Employee Capacity');
    } else if (addOffice?.dateEstablished === '') {
      error_toaster('Please enter Office Established Date');
    } else if (addOffice?.officeHistory === '') {
      error_toaster('Please enter Office History');
    } else {
      let res = await PostApi('dashboard/v1/addOffice', addOffice);
      if (res?.data?.status === '1') {
        success_toaster(res?.data?.message);
        setaddOffice({
          franchiseName: '',
          officeName: '',
          officeRosterLink: '',
          employeeCapacity: '',
          complianceWithFranchiseStandards: false,
          franchiseNetwork: false,
          dateEstablished: '',
          officeHistory: '',
        });
        reFetch();
        setModel(false);
      } else {
        error_toaster(res?.data?.message); // Changed success_toaster to error_toaster
      }
    }
  };

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Modal
        isCentered
        size={'lg'}
        isOpen={model}
        onClose={() => setModel(false)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Office</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form
              onSubmit={addOfficeFunc}
              className="grid sm:grid-cols-2 gap-5"
            >
              <div className="space-y-4">
                <label
                  htmlFor="franchiseName"
                  className="block font-bold text-slate-400"
                >
                  Franchise Name:
                </label>
                <Input
                  value={addOffice.franchiseName}
                  onChange={onChange}
                  type="text"
                  className="w-full"
                  name="franchiseName"
                  id="franchiseName"
                  required
                />
                <label
                  htmlFor="officeName"
                  className="block font-bold text-slate-400"
                >
                  Office Name:
                </label>
                <Input
                  value={addOffice.officeName}
                  onChange={onChange}
                  type="text"
                  className="w-full"
                  name="officeName"
                  id="officeName"
                  required
                />
              </div>
              <div className="space-y-4">
                <label
                  htmlFor="officeRosterLink"
                  className="block font-bold text-slate-400"
                >
                  Office Roster Link:
                </label>
                <Input
                  value={addOffice.officeRosterLink}
                  onChange={onChange}
                  type="text"
                  className="w-full"
                  name="officeRosterLink"
                  id="officeRosterLink"
                  required
                />
                <label
                  htmlFor="employeeCapacity"
                  className="block font-bold text-slate-400"
                >
                  Office Employee Capacity:
                </label>
                <Input
                  value={addOffice.employeeCapacity}
                  onChange={onChange}
                  type="text"
                  className="w-full"
                  name="employeeCapacity"
                  id="employeeCapacity"
                  required
                />
              </div>
              <div className="space-y-4">
                <label
                  htmlFor="dateEstablished"
                  className="block font-bold text-slate-400"
                >
                  Office Established Date:
                </label>
                <Input
                  value={addOffice.dateEstablished}
                  onChange={onChange}
                  type="date"
                  className="w-full"
                  name="dateEstablished"
                  id="dateEstablished"
                  required
                />
              </div>
              <div className="space-y-4">
                <label
                  htmlFor="officeHistory"
                  className="block font-bold text-slate-400"
                >
                  Office History:
                </label>
                <Input
                  value={addOffice.officeHistory}
                  onChange={onChange}
                  type="text"
                  className="w-full"
                  name="officeHistory"
                  id="officeHistory"
                  required
                />
              </div>
              {/* <div className="space-y-4">
                <Input
                  value={addOffice.complianceWithFranchiseStandards}
                  onChange={onChange}
                  type="checkbox"
                  className="w-full"
                  name="complianceWithFranchiseStandards"
                  placeholder="Compliance With Franchise Standards"
                  required
                />
                <Input
                  value={addOffice.franchiseNetwork}
                  onChange={onChange}
                  type="checkbox"
                  className="w-full"
                  name="franchiseNetwork"
                  placeholder="franchiseNetwork"
                  required
                />
              </div> */}
              <div className="flex justify-center sm:col-span-2">
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold my-5">All Offices</h2>
        {localStorage.getItem('roleId') === '1' ? (
          <Button className="my-5" onClick={() => setModel(true)}>
            Add New Office
          </Button>
        ) : (
          ''
        )}
      </div>
      <div>
        <TreeTable
          value={nodes}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25]}
          tableStyle={{ minWidth: '50rem' }}
        >
          <Column field="name" header="Name" expander></Column>
          <Column
            field="establishedDate"
            header="Established Date"
            expander
          ></Column>
          <Column
            field="franchiseName"
            header="Franchise Name"
            expander
          ></Column>
          <Column
            field="employeeCapacity"
            header="Employee Capacity"
            expander
          ></Column>
          <Column field="status" header="Franchise Network"></Column>
        </TreeTable>
      </div>
    </DefaultLayout>
  );
}
