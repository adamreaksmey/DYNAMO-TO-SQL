import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from '@nextui-org/react'

const Home: () => JSX.Element = () => {
  const lucidLink: string = `https://lucid.app/lucidchart/d3d6913d-705a-45fe-b081-921d61699fad/edit?viewport_loc=-411%2C974%2C3166%2C1768%2C0_0&invitationId=inv_1df46744-5c9a-423c-9592-15912ba1203d`

  return (
    <div className="h-screen flex justify-center">
      <Card className="max-w-[400px] h-auto mt-4">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={50}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={50}
          />
          <div className="flex flex-col">
            <p className="text-md">NextUI</p>
            <p className="text-small text-default-500">nextui.org</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>I have set up NextUI for you to get everything started.</p>
          <hr className="py-2" />
          <li>
            Make sure it stays on dark mode. we don't want to use too much
            bright colors.{' '}
          </li>
          <hr className="py-2" />
          <li>
            Always create a pull request, do not push directly to main branch.
          </li>
          <div>
            <p>In case you forget how to create a pull request:</p>
            <hr />
            <li>
              <code>git checkout -b your-branch-name</code>
            </li>
            <div className="font-bold">After you've done your work.</div>
            <li>
              <code>git add .</code>
            </li>
            <li>
              <code>git commit -m " commit message "</code>
            </li>
            <li>
              <code>git push -u origin head</code>
              <div>
                The 'push -u origin head' is only for first time push on your
                pull request, for 2nd time and above, just do{' '}
                <code>git push</code>
              </div>
            </li>
            <div className="font-bold">
              Whenever you want start a pull request, always checkout to main
              branch first, pull latest from main branch then checkout from main
              branch to create your pull request. never checkout from your pull
              request.
            </div>
            <li>
              I will review your pull request, then merge it to main branch.
              this rule will apply to me too, i will also create a pull request
              first too before i merge it to main branch. good luck!
            </li>
          </div>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link isExternal showAnchorIcon href={lucidLink}>
            Also logic is 80% finished, you can start following it.
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Home
