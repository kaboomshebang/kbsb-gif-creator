const NavMenu = () => {
	return (
		<nav className="absolute mt-8 top-0 right-0 p-5">
			<div className="w-64 bg-white drop-shadow-xl p-5 border-gray-200 border">
				<ul>
					<li className="py-2">
						Thanks to all the creators and contributors of the{' '}
						<a
							href="https://github.com/yahoo/gifshot"
							className="underline"
							target="_blank"
							rel="noopener noreferrer"
						>
							Gifshot JS
						</a>{' '}
						library.
					</li>
					<li className="py-2">
						Visit{' '}
						<a
							href="https://www.kaboomshebang.com"
							className="underline"
							target="_blank"
							rel="noopener noreferrer"
						>
							kaboomshebang.com
						</a>{' '}
						for more apps.
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavMenu;
