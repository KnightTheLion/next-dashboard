import { Metadata } from 'next';
import CustomersTable from '@/app/ui/customers/table';


const metadata: Metadata = {
  title: 'Customers',
};
export { metadata };

export default function Page() {
  return <CustomersTable />;
}
