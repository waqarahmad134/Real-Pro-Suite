import { Column } from 'primereact/column';
import { TreeTable } from 'primereact/treetable';
import React, { useEffect, useState } from 'react';
import useFetch from '../ApiClient/GetApi';
import { PostApi } from '../ApiClient/PostApi';
import { error_toaster, success_toaster } from '../components/toaster/Toaster';
import DefaultLayout from '../layout/DefaultLayout';
import Loader, { Loader2 } from '../components/loader/Loader';
import { Link, useNavigate } from 'react-router-dom';
import SearchBox from '../components/SearchBox/SearchBox';

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

export default function Agents() {
  const navigate = useNavigate();
  const AgentDetail = async (id) => {
    navigate('/agentDetails');
  };
  const { data, reFetch } = useFetch('dashboard/v1/allAgents');
  const offices = useFetch('dashboard/v1/allOffices');
  const roles = useFetch('dashboard/v1/getroles');

  const [nodes, setNodes] = useState([]);
  const [model, setModel] = useState(false);
  const [searchField, setSearchField] = useState('');
  const [filter, setFilter] = useState('lastName');

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const [agentData, setAgentData] = useState({
    nickName: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    DOB: '',
    gender: '',
    officeId: '', // Assuming a default value for officeId
    roleId: '',
  });

  const onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    setSearchField(searchField);
  };

  const onFilterChange = (event) => {
    const filter = event.target.value;
    setFilter(filter);
  };

  const filteredAgents =
    searchField === ''
      ? data?.data
      : filter === 'lastName'
      ? data?.data?.filter((agent) =>
          agent.lastName.toLowerCase().includes(searchField),
        )
      : filter === 'firstName'
      ? data?.data?.filter((agent) =>
          agent.firstName.toLowerCase().includes(searchField),
        )
      : filter === 'officeName'
      ? data?.data?.filter((agent) =>
          agent.office.officeName.toLowerCase().includes(searchField),
        )
      : filter === 'role'
      ? data?.data?.filter((agent) =>
          agent.role.name.toLowerCase().includes(searchField),
        )
      : data?.data;

  useEffect(() => {
    if (filteredAgents) {
      const formattedNodes = filteredAgents.map((agent) => ({
        data: {
          id: agent.id,
          firstname: agent.firstName,
          lastname: agent.lastName,
          email: agent.email,
          officename: agent.office.officeName,
          role: agent.role.name,
        },
      }));
      setNodes(formattedNodes);
    }
  }, [filteredAgents]);

  const onChange = (e) => {
    setAgentData({ ...agentData, [e.target.name]: e.target.value });
  };
  const addAgentFunc = async (e) => {
    e.preventDefault();
    // Validation logic similar to addOfficeFunc
    if (agentData?.nickName === '') {
      error_toaster('Please Add Nick Name');
    } else if (agentData?.firstName === '') {
      error_toaster('Please Add First Name');
    } else if (agentData?.lastName === '') {
      error_toaster('Please Add Last Name');
    } else if (agentData?.email === '') {
      error_toaster('Please enter Email');
    } else if (agentData?.password === '') {
      error_toaster('Please enter Password');
    } else if (agentData?.DOB === '') {
      error_toaster('Please enter Date of Birth');
    } else if (agentData?.gender === '') {
      error_toaster('Please Select Gender');
    } else if (agentData?.officeId === '') {
      error_toaster('Please Select Office');
    } else if (agentData?.roleId === '') {
      error_toaster('Please Select Role');
    } else {
      let res = await PostApi('dashboard/v1/addAgent', agentData); // Assuming endpoint for adding agent is 'dashboard/v1/addAgent'
      if (res?.data?.status === '1') {
        success_toaster(res?.data?.message);
        setAgentData({
          nickName: '',
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          DOB: '',
          gender: '',
          officeId: '', // Resetting officeId to default value
          roleId: '',
        });
        reFetch();
        setModel(false);
        // Perform any additional actions like reFetch and closing modal
      } else {
        error_toaster(res?.data?.message);
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
          <ModalHeader>Add Agent</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={addAgentFunc} className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-4">
                <label
                  htmlFor="firstName"
                  className="block font-bold text-slate-400"
                >
                  First Name:
                </label>
                <Input
                  value={agentData.firstName}
                  onChange={onChange}
                  type="text"
                  className="w-full"
                  name="firstName"
                  id="firstName"
                  required
                />
                <label
                  htmlFor="nickName"
                  className="block font-bold text-slate-400"
                >
                  Nick Name:
                </label>
                <Input
                  value={agentData.nickName}
                  onChange={onChange}
                  type="text"
                  className="w-full"
                  name="nickName"
                  id="nickName"
                  required
                />
              </div>
              <div className="space-y-4">
                <label
                  htmlFor="lastName"
                  className="block font-bold text-slate-400"
                >
                  Last Name:
                </label>
                <Input
                  value={agentData.lastName}
                  onChange={onChange}
                  type="text"
                  className="w-full"
                  name="lastName"
                  id="lastName"
                  required
                />
                <label
                  htmlFor="email"
                  className="block font-bold text-slate-400"
                >
                  Email:
                </label>
                <Input
                  value={agentData.email}
                  onChange={onChange}
                  type="email"
                  className="w-full"
                  name="email"
                  id="email"
                  autocomplete="off"
                  required
                />
              </div>
              <div className="space-y-4">
                <label
                  htmlFor="password"
                  className="block font-bold text-slate-400"
                >
                  Password:
                </label>
                <Input
                  value={agentData.password}
                  onChange={onChange}
                  type="password"
                  className="w-full"
                  name="password"
                  id="password"
                  required
                />
              </div>
              <div className="space-y-4">
                <label htmlFor="DOB" className="block font-bold text-slate-400">
                  Date of Birth:
                </label>
                <Input
                  value={agentData.DOB}
                  onChange={onChange}
                  type="date"
                  className="w-full"
                  name="DOB"
                  id="DOB"
                  required
                />
              </div>
              <div className="space-y-4">
                <label
                  htmlFor="gender"
                  className="block font-bold text-slate-400"
                >
                  Gender:
                </label>
                <select
                  value={agentData.gender}
                  onChange={onChange}
                  className="w-full"
                  name="gender"
                  id="gender"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-4">
                <label
                  htmlFor="officeId"
                  className="block font-bold text-slate-400"
                >
                  Office :
                </label>
                <select
                  value={agentData.officeId} // Assuming you have a state variable to hold the selected office ID
                  onChange={onChange} // Assuming you have a function to handle onChange event
                  className="w-full"
                  name="officeId"
                  id="officeId"
                  required
                >
                  <option value="">Select Office</option>
                  {offices?.data?.data?.length > 0
                    ? offices?.data?.data?.map((office) => (
                        <option key={office.id} value={office.id}>
                          {office.officeName}
                        </option>
                      ))
                    : ''}
                </select>
              </div>
              <div className="space-y-4">
                <label
                  htmlFor="roleId"
                  className="block font-bold text-slate-400"
                >
                  Role :
                </label>
                <select
                  value={agentData.roleId} // Assuming you have a state variable to hold the selected role ID
                  onChange={onChange} // Assuming you have a function to handle onChange event
                  className="w-full"
                  name="roleId"
                  id="roleId"
                  required
                >
                  <option value="">Select Role</option>
                  {roles?.data?.data?.length > 0
                    ? roles?.data?.data?.map((role) => (
                        <option key={role.id} value={role.id}>
                          {role.name}
                        </option>
                      ))
                    : ''}
                </select>
              </div>

              <div className="flex justify-center sm:col-span-2">
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
      <div className="flex justify-between items-center">
        <div className="flex justify-center sm:col-span-2 space-x-2 items-center">
          <select
            value={filter}
            onChange={onFilterChange}
            className="w-1/2 p-2 border border-gray-300 rounded-md"
            name="filter"
            id="filter"
            required
          >
            <option value="lastName">Last Name</option>
            <option value="firstName">First Name</option>
            <option value="officeName">Office Name</option>
            <option value="role">Role</option>
          </select>
          <SearchBox
            onChangeHandler={onSearchChange}
            placeholder={`Search by ${filter}`}
            style={{
              width: '50%',
              padding: '0.5rem',
              border: '1px solid #ccc',
              borderRadius: '0.25rem',
            }}
          />
        </div>

        {localStorage.getItem('roleId') === '1' ? (
          <Button className="my-5" onClick={() => setModel(true)}>
            Add New Agent
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
          <Column field="firstname" header="First Name" expander></Column>
          <Column field="lastname" header="Last Name"></Column>
          <Column field="email" header="Email"></Column>
          <Column field="officename" header="Office Name"></Column>
          <Column field="role" header="Role"></Column>
          <Column
            body={(node) => (
              <Button onClick={() => AgentDetail(node.id)}>Details</Button>
            )}
          />
        </TreeTable>
      </div>
    </DefaultLayout>
  );
}
