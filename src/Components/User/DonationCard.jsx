

const DonationCard = () => {
    return (
            <div>
            <p>Sold Properties</p>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
	<h2 className="mb-4 text-2xl font-semibold leadi">Invoices</h2>
	<div className="overflow-x-auto">
		<table className="min-w-full text-xs">
			
			<thead className="bg-yellow-200 text-yellow-600">
				<tr className="text-left">
					<th className="p-3">Property</th>
					<th className="p-3">Client</th>
					<th className="p-3">Issued</th>
					<th className="p-3">Due</th>
					<th className="p-3 text-right">Amount</th>
					<th className="p-3">Status</th>
				</tr>
			</thead>
			<tbody className='bg-yellow-50 text-yellow-600'>
				<tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
					<td className="p-3">
						<p><img className='w-10 h-10' src="https://i.ibb.co/rZz42Ck/property1.jpg" alt="" /></p>
					</td>
					<td className="p-3">
						<p>Microsoft Corporation</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="dark:text-gray-400">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="dark:text-gray-400">Tuesday</p>
					</td>
					<td className="p-3 text-right">
						<p>$15,792</p>
					</td>
					<td className="p-3 text-right">
						<span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
							<span>Pending</span>
						</span>
					</td>
				</tr>
				<tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
					<td className="p-3">
                    <p><img className='w-10 h-10' src="https://i.ibb.co/rZz42Ck/property1.jpg" alt="" /></p>
					</td>
					<td className="p-3">
						<p>Tesla Inc.</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="dark:text-gray-400">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="dark:text-gray-400">Tuesday</p>
					</td>
					<td className="p-3 text-right">
						<p>$275</p>
					</td>
					<td className="p-3 text-right">
						<span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
							<span>Pending</span>
						</span>
					</td>
				</tr>
				<tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
					<td className="p-3">
                    <p><img className='w-10 h-10' src="https://i.ibb.co/rZz42Ck/property1.jpg" alt="" /></p>
					</td>
					<td className="p-3">
						<p>Coca Cola co.</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="dark:text-gray-400">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="dark:text-gray-400">Tuesday</p>
					</td>
					<td className="p-3 text-right">
						<p>$8,950,500</p>
					</td>
					<td className="p-3 text-right">
						<span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
							<span>Pending</span>
						</span>
					</td>
				</tr>
				<tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
					<td className="p-3">
                    <p><img className='w-10 h-10' src="https://i.ibb.co/rZz42Ck/property1.jpg" alt="" /></p>
					</td>
					<td className="p-3">
						<p>Nvidia Corporation</p>
					</td>
					<td className="p-3">
						<p>14 Jan 2022</p>
						<p className="dark:text-gray-400">Friday</p>
					</td>
					<td className="p-3">
						<p>01 Feb 2022</p>
						<p className="dark:text-gray-400">Tuesday</p>
					</td>
					<td className="p-3 text-right">
						<p>$98,218</p>
					</td>
					<td className="p-3 text-right">
						<span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">
							<span>Pending</span>
						</span>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
        </div>
    );
};

export default DonationCard;