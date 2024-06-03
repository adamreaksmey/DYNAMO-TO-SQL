import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black p-4 sm:px-6 sm:py-8  h-[250px] ">
      <div className="px-3 sm:px-4mx-automt-6">
        This project both of us try to make convertor and Modifier when the user
        in put format file and our algorighm convert it to other file format{' '}
        <h3> Developer</h3>
        <div className="flex gap-4 text-blue-500">
          <a
            href="https://github.com/adamreaksmey"
            target="_blank"
            className="text-inherit"
          >
            Adam
          </a>
          <a
            href="https://github.com/Ismedom"
            target="_blank"
            className="text-inherit"
          >
            IsMeDom
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
