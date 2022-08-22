import React, {useMemo} from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { ELLayout, ElInput, ElButton, ElTable } from '../../../components';

function LeadsList() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      name: '',
      contact: '',
    },
  });
  const columns = useMemo(
    () => [
      {
        // first group - TV Show
        Header: 'Lead Name',
        // First group columns
        // columns: [
        //   {
        //     Header: 'Name',
        //     accessor: 'show.name',
        //   },
        //   {
        //     Header: 'Type',
        //     accessor: 'show.type',
        //   },
        // ],
      },
      {
        Header: 'Contact',
      },
      {
        Header: 'City',
      },
      {
        Header: 'Type',
      },
      {
        Header: 'Buget',
      },
      {
        // Second group - Details
        Header: 'Status',
        // Second group columns
        // columns: [
        //   {
        //     Header: 'Language',
        //     accessor: 'show.language',
        //   },
        //   {
        //     Header: 'Genre(s)',
        //     accessor: 'show.genres',
        //   },
        //   {
        //     Header: 'Runtime',
        //     accessor: 'show.runtime',
        //   },
        //   {
        //     Header: 'Status',
        //     accessor: 'show.status',
        //   },
        // ],
      },
    ],
    [],
  );
  const onSubmit = (data) => console.log(data);
  return (
    <ELLayout>
      <div className="rounded-xl bg-white overflow-hidden shadow-xl py-6 px-8 w-full mb-9">
        <h1 className="text-3xl mb-7">Leads</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-3 gap-4 my-3">
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <ElInput placeholder="Lead Name" {...field} />
              )}
            />
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <ElInput
                  placeholder="Contact Details"
                  {...field}
                />
              )}
            />
            <Controller
              name="type"
              control={control}
              render={({ field }) => (
                <ElInput placeholder="Lead Type" {...field} />
              )}
            />
            <Controller
              name="city"
              control={control}
              render={({ field }) => <ElInput placeholder="City" {...field} />}
            />
            <Controller
              name="state"
              control={control}
              render={({ field }) => <ElInput placeholder="State" {...field} />}
            />

            <Controller
              name="source"
              control={control}
              render={({ field }) => (
                <ElInput placeholder="Lead Source" {...field} />
              )}
            />
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <ElInput placeholder="Lead Status" {...field} />
              )}
            />
            <Controller
              name="bugdet"
              control={control}
              render={({ field }) => (
                <ElInput placeholder="Budget" {...field} />
              )}
            />
          </div>
          <div className="mt-3 grid grid-cols-2 grid-flow-col gap-2">
            <div className="col-span-2"></div>
            <ElButton
              value="Search"
              onClick={() => console.log('fhgfggjfffg')}
            />
          </div>
        </form>
      </div>
      <div className="rounded-xl bg-white overflow-hidden shadow-xl py-6 px-8 w-full">
        <div className="flex items-center mb-7 justify-between">
          <div className="">
            <h1 className="text-3xl">Leads</h1>
          </div>
          <ElButton value="New Lead" onClick={() => navigate('/leads/add')} />
        </div>
        <ElTable columns={columns} data={[]} />
      </div>
    </ELLayout>
  );
}

export default LeadsList;
