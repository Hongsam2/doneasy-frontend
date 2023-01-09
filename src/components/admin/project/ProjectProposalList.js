import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import axios from 'axios';

function classNames(...classes) {
    return classes.filter(Boolean).join('');
}

function ProjectProposalList({ value }) {
    const [status, setStatus] = useState(value.status);
    const onListClick = () => {
        console.log('haha');
        window.location.href = `/admin/project/proposal/detail/${value.id}`;
    };

    const onSuccessClick = () => {
        axios
            .post('http://localhost:8080/admin/projectproposal/success', {
                id: value.id,
            })
            .then((response) => {
                console.log(response);
                setStatus('SUCCESS');
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const onFailClick = () => {
        axios
            .post('http://localhost:8080/admin/projectproposal/fail', {
                id: value.id,
            })
            .then((response) => {
                console.log(response);
                setStatus('FAIL');
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <>
            <div className="flex text-center my-2">
                <div
                    className="w-1/4 tracking-wide rounded-lg hover:cursor-pointer hover:bg-gray-100"
                    onClick={onListClick}
                >
                    {value.title}
                </div>
                <div className="w-1/4 tracking-wide">
                    {value.organizationName}
                </div>

                {status === 'WAIT' ? (
                    <Menu
                        as="div"
                        className="w-1/4 tracking-wide relative inline-block"
                    >
                        <div>
                            <Menu.Button
                                id="menu-button"
                                aria-expanded="true"
                                aria-haspopup="true"
                                className="rounded-lg tracking-wider px-3 py-1 duration-150 hover:duration-150 bg-gray-100 hover:bg-gray-200"
                            >
                                {status}
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items
                                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="menu-button"
                                tabIndex="-1"
                            >
                                <div className="py-1" role="none">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                href="!#"
                                                className={classNames(
                                                    active
                                                        ? 'bg-gray-100 text-gray-900'
                                                        : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                                role="menuitem"
                                                tabIndex="-1"
                                                id="menu-item-0"
                                                onClick={onSuccessClick}
                                            >
                                                SUCCESS
                                            </button>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                href="!#"
                                                className={classNames(
                                                    active
                                                        ? 'bg-gray-100 text-gray-900'
                                                        : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                                role="menuitem"
                                                tabIndex="-1"
                                                id="menu-item-0"
                                                onClick={onFailClick}
                                            >
                                                FAIL
                                            </button>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                ) : (
                    <div className="mx-auto">
                        <button
                            id="menu-button"
                            aria-expanded="true"
                            aria-haspopup="true"
                            className={`rounded-lg tracking-wider px-3 py-1 duration-150 hover:duration-150 ${
                                status === 'FAIL'
                                    ? 'bg-red-100 hover:bg-red-200'
                                    : 'bg-green-100 hover:bg-green-200'
                            }`}
                        >
                            {status}
                        </button>
                    </div>
                )}
                <div className="w-1/4 tracking-wide">
                    {value.date.substring(0, 10)}
                </div>
            </div>
        </>
    );
}
export default ProjectProposalList;
