import {lazy} from 'react'

const Dashboard = lazy(() => import('../containers/dashboard'));

const LeadsList = lazy(() => import('../containers/leads/list'));
const AddLeads = lazy(() => import('../containers/leads/add'));

const CustomersList = lazy(() => import('../containers/customers/list'));

export { Dashboard, LeadsList, CustomersList, AddLeads };