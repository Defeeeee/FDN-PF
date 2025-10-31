import svgPaths from "./svg-5dmv1i37mb";

function MaterialSymbolsMailOutline() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="material-symbols:mail-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="material-symbols:mail-outline">
          <path d={svgPaths.p3446fc00} fill="var(--fill-0, #E8E9F3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RiLinkedinFill() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="ri:linkedin-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="ri:linkedin-fill">
          <path d={svgPaths.p21cb800} fill="var(--fill-0, #E8E9F3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="Group">
          <g id="Vector"></g>
          <path d={svgPaths.p17e1800} fill="var(--fill-0, #E8E9F3)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex gap-[49px] items-center relative shrink-0">
      <MaterialSymbolsMailOutline />
        <a href="https://www.linkedin.com/in/fdiaznem/"><RiLinkedinFill /></a>
        <a href="https://github.com/defeeeee"><Group /></a>
    </div>
  );
}

function Frame102() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[26px] items-center left-[460px] top-[51px] w-[1000px]">
      <Frame101 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1000 1">
            <line id="Line 5" stroke="var(--stroke-0, #E8E9F3)" x2="1000" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="font-['Saans_VF-TRIAL:Bold',sans-serif] font-bold leading-[normal] min-w-full relative shrink-0 text-[#e8e9f3] text-[25px] text-center w-[min-content]" style={{ fontVariationSettings: "'ital' 0, 'MONO' 0" }}>
        © 2025 Federico Diaz Nemeth. Diseñado y construido en Buenos Aires, Argentina.
      </p>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-[#272635] relative size-full" data-name="Footer">
      <Frame102 />
    </div>
  );
}