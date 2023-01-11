import './globals.css'
import Header from './header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
return (
	<>
		<head />
		<body className='text-softblack'>   
			<Header />
			<div>{children}</div>
		</body>
	</>
)
}
