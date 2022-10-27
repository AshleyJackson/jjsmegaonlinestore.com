import { MdOutlineDownloading } from 'react-icons/md';
import { ImEvil } from 'react-icons/im';

function App() {
	return (
		<>
			<div>
				<div className='text-center bg-green-300 text-xl'>
					Hello and welcome to jjsmegaonlinestore.com, Also known as Mimecast's online store that they use in their Training known as "Everybody Needs to Know".

				</div>
				<div className='text-center bg-green-300 text-xl'>
					Surprisingly, they didn't own this domain...
				</div>

			</div>
			<div className='overflow-hidden bg-gray-400 inset-y-5 h-screen pt-80'>
				<dl className='bg-blue-300'>
					<div className='relative px-4 py-7 shadow sm:rounded-lg sm:p-6'>
						<MdOutlineDownloading className='text-5xl ml-80 -left-1/2 animate-bounce' />
						<dt className='text-2xl -mt-10 font-medium text-red-500 truncate text-center content-center'>
							DOWNLOADING THE "MIMECAST" TRAINING TO YOUR COMPUTER... OR MALICIOUS MALWARE....
						<ImEvil className='text-5xl fixed mb-4 mr-72 bottom-1/2 right-10 animate-bounce' />
						</dt>
					</div>
				</dl>
			</div>
		</>
	)
};

export default App;