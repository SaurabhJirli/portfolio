export type LogoProps = React.SVGProps<SVGSVGElement>;

export default function Logo({ className = "", ...rest }: LogoProps) {
  return (
    <svg
      className={className}
      {...rest}
      viewBox="0 0 83 83"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40.7124 69.7373V82.1123L0.837402 82.1123L0.837403 69.7373H40.7124ZM40.7124 54.6123L0.837402 54.6123L0.837403 42.2373H40.7124V54.6123ZM40.7124 27.1123L0.837402 27.1123L0.837403 14.7373L40.7124 14.7373V27.1123ZM42.0874 13.3623V0.987305L81.9624 0.987308V13.3623L42.0874 13.3623ZM42.0874 68.3623V55.9873H81.9624V68.3623L42.0874 68.3623ZM42.0874 40.8623V28.4873H81.9624V40.8623L42.0874 40.8623Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.375"
      ></path>
    </svg>
  );
}
