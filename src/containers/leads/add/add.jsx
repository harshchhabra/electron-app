import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import {
  ELLayout,
  ElInput,
  ElButton,
  ELDropdown,
  ElCheckbox,
  ElTextarea,
} from '../../../components';
import states from '../../../utils/json-data/states.json'
import {  } from '../../../assets/svg-icons';

function AddLeads() {
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
      status: { label: 'Open', value: 1 },
      category: { label: 'Makeup', value: 'makeup' },
      state: { label: '', value: '' },
      city: { label: '', value: '' },
    },
  });
  const onSubmit = (data) => console.log(data);
  return (
    <ELLayout>
      <div className="rounded-xl bg-white shadow-xl py-6 px-8 w-full">
        <div className="flex w-full mb-3 items-center justify-between">
          <div className="heading">
            <h1 className="text-xl">Create Lead</h1>
            <p class="text-sm text-gray-500">Add the information of the lead</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <ElButton
              classNames="bg-gray-300 hover:bg-red-700 hover:text-white"
              value="Hot"
              textColor="text-gray-darkest"
              icon={
                <svg
                  className="w-6 pr-2"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 92.27 122.88"
                  xmlSpace="preserve"
                >
                  <g>
                    <path
                      style={{
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        fill: '#EC6F59',
                      }}
                      d="M18.61,54.89C15.7,28.8,30.94,10.45,59.52,0C42.02,22.71,74.44,47.31,76.23,70.89 c4.19-7.15,6.57-16.69,7.04-29.45c21.43,33.62,3.66,88.57-43.5,80.67c-4.33-0.72-8.5-2.09-12.3-4.13C10.27,108.8,0,88.79,0,69.68 C0,57.5,5.21,46.63,11.95,37.99C12.85,46.45,14.77,52.76,18.61,54.89L18.61,54.89z"
                    />
                    <path
                      style={{
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        fill: '#FAD15C',
                      }}
                      d="M33.87,92.58c-4.86-12.55-4.19-32.82,9.42-39.93c0.1,23.3,23.05,26.27,18.8,51.14 c3.92-4.44,5.9-11.54,6.25-17.15c6.22,14.24,1.34,25.63-7.53,31.43c-26.97,17.64-50.19-18.12-34.75-37.72 C26.53,84.73,31.89,91.49,33.87,92.58L33.87,92.58z"
                    />
                  </g>
                </svg>
              }
              onClick={() => navigate('/leads')}
            />
            <ElButton
              classNames="bg-gray-300 hover:bg-green-700 hover:text-white"
              textColor="text-gray-darkest"
              value="Average"
              icon={
                <svg
                  className="w-6 pr-2"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 330 330"
                  xmlSpace="preserve"
                >
                  <g id="XMLID_26_">
                    <path
                      style={{
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        fill: '#fff',
                      }}
                      id="XMLID_27_"
                      d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M165,300
		c-74.44,0-135-60.561-135-135S90.56,30,165,30s135,60.561,135,135S239.439,300,165,300z"
                    />
                    <path
                      style={{
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        fill: '#fff',
                      }}
                      id="XMLID_30_"
                      d="M215.911,200.912H114.088c-6.067,0-11.537,3.654-13.858,9.26c-2.321,5.605-1.038,12.057,3.252,16.347
		C119.914,242.95,141.762,252,165,252c23.238,0,45.086-9.05,61.518-25.481c4.29-4.29,5.573-10.741,3.252-16.347
		C227.448,204.566,221.978,200.912,215.911,200.912z"
                    />
                    <path
                      style={{
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        fill: '#fff',
                      }}
                      id="XMLID_31_"
                      d="M115.14,147.14c3.72-3.72,5.86-8.88,5.86-14.14c0-5.26-2.14-10.42-5.86-14.141
		C111.42,115.14,106.26,113,101,113c-5.27,0-10.42,2.14-14.14,5.859C83.13,122.58,81,127.74,81,133c0,5.26,2.13,10.42,5.86,14.14
		c3.72,3.72,8.88,5.86,14.14,5.86C106.26,153,111.42,150.859,115.14,147.14z"
                    />
                    <path
                      style={{
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        fill: '#fff',
                      }}
                      id="XMLID_71_"
                      d="M229,113c-5.26,0-10.42,2.14-14.14,5.859c-3.72,3.721-5.86,8.87-5.86,14.141c0,5.26,2.14,10.42,5.86,14.14
		c3.72,3.72,8.88,5.86,14.14,5.86c5.26,0,10.42-2.141,14.14-5.86c3.73-3.72,5.86-8.88,5.86-14.14c0-5.26-2.13-10.42-5.86-14.141
		C239.42,115.14,234.27,113,229,113z"
                    />
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>
              }
              onClick={() => navigate('/leads')}
            />
            <ElButton
              classNames="bg-gray-300 hover:bg-blue-600 hover:text-white"
              textColor="text-gray-darkest"
              value="Cold"
              icon={
                <svg
                  className="w-6 pr-2"
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 297 297"
                  xmlSpace="preserve"
                >
                  <path
                    style={{
                      fillRule: 'evenodd',
                      clipRule: 'evenodd',
                      fill: 'blue',
                    }}
                    d="M274.634,212.686l-20.625-11.907l21.156-13.668c3.479-2.247,4.478-6.893,2.23-10.372c-2.247-3.48-6.891-4.482-10.369-2.236
	l-27.63,17.839l-11.238-6.488l11.238-8.362c3.322-2.473,4.012-7.171,1.539-10.494c-2.472-3.321-7.171-4.014-10.494-1.539
	l-16.432,12.227l-24.66-14.237l-0.054-29.817l24.677-14.246l17.665,11.006c1.233,0.77,2.605,1.136,3.959,1.136
	c2.504,0,4.951-1.253,6.372-3.535c2.19-3.516,1.116-8.141-2.399-10.331l-10.874-6.775l10.464-6.042l27.89,16.771
	c1.21,0.728,2.542,1.073,3.858,1.073c2.545,0,5.027-1.296,6.435-3.636c2.135-3.55,0.987-8.158-2.563-10.293l-20.77-12.488
	l20.074-11.59c3.587-2.071,4.816-6.658,2.745-10.245c-2.071-3.587-6.66-4.813-10.245-2.745l-20.623,11.906l-1.258-25.153
	c-0.207-4.136-3.71-7.341-7.865-7.115c-4.137,0.206-7.322,3.728-7.115,7.865l1.642,32.831l-11.256,6.498l-1.622-13.912
	c-0.479-4.114-4.209-7.073-8.317-6.581c-4.114,0.479-7.062,4.203-6.581,8.317l2.372,20.345l-24.464,14.027l-26.419-15.277V77.504
	l18.972-8.117c3.803-1.642,5.638-6.056,3.996-9.858c-1.641-3.801-6.177-5.554-9.983-3.913l-12.985,5.551V48.17l29.42-14.995
	c3.686-1.889,5.226-6.409,3.336-10.095c-1.89-3.686-6.534-5.143-10.22-3.253l-22.537,11.487V7.5c0-4.143-3.357-7.5-7.5-7.5
	c-4.143,0-7.5,3.357-7.5,7.5v23.182L119.043,18.94c-3.622-2.01-8.103-0.697-10.111,2.927c-2.007,3.624-0.821,8.188,2.802,10.194
	l28.342,15.767v12.084l-11.137-6.028c-3.655-1.95-8.115-0.566-10.063,3.088c-1.95,3.654-0.692,8.197,2.963,10.147l18.237,9.793
	v29.024l-25.335,14.532l-23.783-13.779l2.414-20.343c0.48-4.114-2.445-7.839-6.559-8.318c-4.109-0.494-7.828,2.466-8.308,6.58
	L76.886,98.52l-11.252-6.498l1.642-32.831c0.207-4.137-2.978-7.658-7.116-7.864c-4.113-0.213-7.658,2.979-7.864,7.116l-1.258,25.151
	L30.415,71.687c-3.59-2.071-8.175-0.843-10.245,2.745c-2.071,3.587-0.842,8.174,2.745,10.245l20.077,11.591l-20.77,12.488
	c-3.55,2.135-4.697,6.743-2.562,10.293c1.407,2.34,3.89,3.636,6.434,3.636c1.316,0,2.649-0.347,3.858-1.073l27.889-16.77
	l10.465,6.041l-10.873,6.775c-3.516,2.19-4.59,6.815-2.399,10.331c1.421,2.282,3.868,3.535,6.372,3.535
	c1.354,0,2.726-0.366,3.959-1.136l17.663-11.006l24.397,14.086l0.047,30.082l-24.481,14.134l-16.433-12.226
	c-3.322-2.471-8.019-1.782-10.494,1.541c-2.473,3.323-1.782,8.021,1.541,10.494l11.236,8.359l-11.252,6.497l-27.616-17.842
	c-3.478-2.245-8.121-1.255-10.369,2.225c-2.248,3.48-1.249,8.11,2.231,10.358l21.187,13.669l-20.657,11.927
	c-3.587,2.071-4.816,6.658-2.745,10.245c1.389,2.406,3.91,3.751,6.502,3.751c1.272,0,2.563-0.324,3.743-1.006l20.077-11.592
	l0.43,24.139c0.073,4.097,3.416,7.275,7.496,7.275c0.045,0,0.091,0,0.136,0c4.142,0,7.44-3.4,7.366-7.541l-0.578-32.446
	l10.465-6.042l0.431,12.805c0.137,4.055,3.466,7.248,7.491,7.248c0.085,0,0.172-0.001,0.257-0.004
	c4.14-0.14,7.383-3.608,7.244-7.748l-0.7-20.801l24.935-14.492l25.162,14.674v28.937l-18.196,9.793
	c-3.655,1.949-4.955,6.492-3.005,10.146c1.35,2.531,3.984,3.973,6.666,3.973c1.191,0,2.253-0.285,3.377-0.885l11.158-6.028v12.084
	l-28.3,15.767c-3.623,2.007-4.85,6.57-2.844,10.194c1.369,2.472,3.97,3.867,6.609,3.867c1.229,0,2.33-0.303,3.481-0.94
	l21.054-11.741V289.5c0,4.143,3.357,7.5,7.5,7.5c4.143,0,7.5-3.357,7.5-7.5v-23.815l22.579,11.487
	c3.685,1.891,8.29,0.434,10.178-3.253c1.89-3.685,0.309-8.206-3.378-10.095l-29.379-14.995v-12.996l13.027,5.551
	c3.804,1.642,8.3-0.11,9.942-3.913c1.642-3.803-0.235-8.217-4.038-9.858l-18.931-8.117v-27.871l26.756-15.102l25.107,14.447
	l-0.659,20.801c-0.139,4.14,3.125,7.608,7.265,7.748c0.086,0.003,0.181,0.004,0.267,0.004c4.025,0,7.36-3.194,7.496-7.248
	l0.433-12.805l10.464,6.041l-0.577,32.447c-0.073,4.141,3.224,7.541,7.366,7.541c0.046,0,0.091,0,0.137,0
	c4.08,0,7.423-3.18,7.496-7.275l0.431-24.139l20.075,11.591c1.182,0.682,2.471,1.006,3.743,1.006c2.592,0,5.113-1.345,6.502-3.751
	C279.45,219.345,278.221,214.758,274.634,212.686z"
                  />
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>
              }
              onClick={() => navigate('/leads')}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-3 gap-4 border-b py-3 my-3">
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <ElInput placeholder="Lead Name" {...field} />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <ElInput placeholder="Lead Email" {...field} />
              )}
            />
            <div className="">
              <label className="block text-sm font-medium text-slate-700">
                Contact Deails
              </label>
              <div className="flex rounded-md shadow-sm flex-row items-center">
                <span class="inline-flex items-center px-3 py-2 rounded-l-md border border-r-0 border-gray-400 bg-gray-50 text-gray-500 text-sm">
                  {' '}
                  +91{' '}
                </span>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <ElInput classNames="grow w-full group-l" {...field} />
                  )}
                />
              </div>
            </div>
            <Controller
              name="source"
              control={control}
              render={({ field }) => (
                <ELDropdown
                  options={[
                    {
                      label: 'You reach out to me',
                      value: 'you reach out to me',
                    },
                    { label: 'Web', value: 'web' },
                    { label: 'Instagram', value: 'instagram' },
                    { label: 'Facebook', value: 'facebook' },
                    { label: 'Other', value: 'other' },
                  ]}
                  placeholder="Lead Source"
                  {...field}
                />
              )}
            />
            <Controller
              name="state"
              control={control}
              render={({ field }) => (
                <ELDropdown
                  options={states.map((v) => ({
                    label: v.name,
                    value: v.name,
                  }))}
                  placeholder="State"
                  {...field}
                />
              )}
            />
            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <ELDropdown
                  options={states.map((v) => ({
                    label: v.name,
                    value: v.name,
                  }))}
                  placeholder="City"
                  {...field}
                />
              )}
            />
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <ELDropdown
                  options={[
                    {
                      label: 'Open',
                      value: 1,
                    },
                    { label: 'Reached to customer', value: 2 },
                    { label: 'Customer', value: 3 },
                    { label: 'On Hold', value: 4 },
                    { label: 'Closed', value: 5 },
                  ]}
                  placeholder="Lead Status"
                  {...field}
                />
              )}
            />
            <div className="">
              <label className="block text-sm font-medium text-slate-700">
                Budget (Min - Max)
              </label>
              <div className="grid grid-cols-7 gap-4">
                <div className="flex col-start-1 col-span-3 rounded-md shadow-sm flex-row items-center">
                  <span class="inline-flex items-center px-3 py-2 rounded-l-md border border-r-0 border-gray-400 bg-gray-50 text-gray-500 text-sm">
                    ₹
                  </span>
                  <Controller
                    name="budget_min"
                    control={control}
                    render={({ field }) => (
                      <ElInput classNames="grow w-full group-l" {...field} />
                    )}
                  />
                </div>
                <div className="flex col-start-4 items-center justify-center">
                  -
                </div>
                <div className="flex col-start-5 col-span-3 rounded-md shadow-sm flex-row items-center">
                  <span class="inline-flex items-center px-3 py-2 rounded-l-md border border-r-0 border-gray-400 bg-gray-50 text-gray-500 text-sm">
                    ₹
                  </span>
                  <Controller
                    name="budget_max"
                    control={control}
                    render={({ field }) => (
                      <ElInput classNames="grow w-full group-l" {...field} />
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="heading">
            <h2 className="text-xl flex-none">Lead Requirements</h2>
            <p class="text-sm text-gray-500">Add your lead requirements</p>
          </div>
          <div className="grid grid-cols-3 gap-20 border-b py-3 my-3">
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <ELDropdown
                  options={[
                    {
                      label: 'Makeup',
                      value: 'makeup',
                    },
                    { label: 'Wedding Planner', value: 'wedding-planner' },
                  ]}
                  placeholder="Choose Category"
                  {...field}
                />
              )}
            />
            <Controller
              name="scategory"
              control={control}
              render={({ field }) => (
                <div className="flex flex-col col-start-2 col-span-2">
                  <label className="text-sm mb-1.5">
                    Services (You can select multiple services)
                  </label>
                  <div className="grid grid-cols-4 gap-1">
                    <ElCheckbox label="Bridal HD" {...field} />
                    <ElCheckbox label="Bridal Airbrush" {...field} />
                    <ElCheckbox label="Airbrush" {...field} />
                    <ElCheckbox label="Party Makeup" {...field} />
                    <ElCheckbox label="Engagement HD" {...field} />
                    <ElCheckbox label="Family HD" {...field} />
                    <ElCheckbox label="Celebrity HD" {...field} />
                  </div>
                </div>
              )}
            />
          </div>
          <div className="heading">
            <h2 className="text-xl flex-none">Lead Notes</h2>
            <p class="text-sm text-gray-500">
              Take your notes to remember every details to track
            </p>
          </div>
          <h2 className="text-xl flex-none mb-4"></h2>
          <Controller
            name="notes"
            control={control}
            render={({ field }) => <ElTextarea label="Notes" {...field} />}
          />
          <div className="mt-3 grid grid-cols-2 grid-flow-col gap-2">
            <div className="col-span-2"></div>
            <ElButton
              type="light-blue"
              value="Cancel"
              disabled
              onClick={() => navigate('/leads')}
            />
            <ElButton value="Save" onClick={() => console.log('fhgfggjfffg')} />
          </div>
        </form>
      </div>
    </ELLayout>
  );
}

export default AddLeads;
