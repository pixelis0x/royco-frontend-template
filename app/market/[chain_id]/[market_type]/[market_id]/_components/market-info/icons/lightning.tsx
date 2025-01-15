import * as React from "react";

const LightningIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement> & { className?: string }) => (
  <svg
    width="15"
    height="14"
    viewBox="0 0 15 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M12.1948 6.86132L6.06983 13.4238C6.00492 13.4931 5.91924 13.5394 5.82573 13.5557C5.73221 13.572 5.63592 13.5574 5.5514 13.5142C5.46688 13.471 5.39871 13.4015 5.35718 13.3161C5.31565 13.2307 5.303 13.1342 5.32116 13.041L6.12287 9.03078L2.97123 7.84734C2.90355 7.82202 2.84319 7.78033 2.79555 7.72599C2.7479 7.67165 2.71447 7.60636 2.69822 7.53595C2.68197 7.46553 2.68341 7.39218 2.70242 7.32246C2.72144 7.25274 2.75742 7.18882 2.80717 7.1364L8.93217 0.573902C8.99708 0.504633 9.08276 0.458354 9.17627 0.442049C9.26979 0.425744 9.36607 0.440299 9.45059 0.483516C9.53511 0.526732 9.60328 0.596267 9.64482 0.681627C9.68635 0.766986 9.699 0.863539 9.68084 0.956715L8.87694 4.97132L12.0286 6.15312C12.0958 6.17861 12.1556 6.22025 12.2029 6.27438C12.2502 6.3285 12.2834 6.39343 12.2996 6.46344C12.3158 6.53344 12.3146 6.60637 12.2959 6.67576C12.2772 6.74516 12.2418 6.80889 12.1926 6.86132H12.1948Z"
      fill="currentColor"
    />
  </svg>
);

export default LightningIcon;
