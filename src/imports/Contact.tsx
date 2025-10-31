function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[21px] items-start leading-[normal] relative shrink-0 w-[722px]">
      <p className="font-['Saans_VF-TRIAL:Bold',sans-serif] font-bold relative shrink-0 text-[#e8e9f3] text-[85px] w-full" style={{ fontVariationSettings: "'ital' 0, 'MONO' 0" }}>
        Hablemos
      </p>
      <p className="font-['Saans_VF-TRIAL:Regular',sans-serif] font-normal relative shrink-0 text-[30px] text-white w-full" style={{ fontVariationSettings: "'ital' 0, 'MONO' 0" }}>
        Siempre estoy abierto a nuevos desafíos y oportunidades para colaborar. Si tenés un proyecto en mente o simplemente querés conectar, no dudes en escribirme.
      </p>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[48px] top-[128px]">
      <div className="absolute bg-[#d9d9d9] h-[62px] left-[48px] rounded-[15px] top-[128px] w-[578px]">
        <div aria-hidden="true" className="absolute border-[#232d50] border-[5px] border-solid inset-0 pointer-events-none rounded-[15px]" />
      </div>
      <p className="absolute font-['Saans_VF-TRIAL:Bold',sans-serif] font-bold leading-[normal] left-[83px] opacity-[0.47] text-[25px] text-black text-nowrap top-[145px] whitespace-pre" style={{ fontVariationSettings: "'ital' 0, 'MONO' 0" }}>
        Email
      </p>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-[48px] top-[372px]">
      <div className="absolute bg-[#0092ff] h-[62px] left-[48px] rounded-[15px] top-[372px] w-[578px]" />
      <p className="absolute font-['Saans_VF-TRIAL:Bold',sans-serif] font-bold leading-[normal] left-[301px] text-[25px] text-nowrap text-white top-[389px] whitespace-pre" style={{ fontVariationSettings: "'ital' 0, 'MONO' 0" }}>
        Enviar
      </p>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[48px] top-[208px]">
      <div className="absolute bg-[#d9d9d9] h-[146px] left-[48px] rounded-[15px] top-[208px] w-[578px]">
        <div aria-hidden="true" className="absolute border-[#232d50] border-[5px] border-solid inset-0 pointer-events-none rounded-[15px]" />
      </div>
      <p className="absolute font-['Saans_VF-TRIAL:Bold',sans-serif] font-bold leading-[normal] left-[83px] opacity-[0.47] text-[25px] text-black text-nowrap top-[225px] whitespace-pre" style={{ fontVariationSettings: "'ital' 0, 'MONO' 0" }}>
        Mensaje
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#2f4287] h-[482px] overflow-clip relative rounded-[15px] shrink-0 w-[674px]">
      <div className="absolute bg-[#d9d9d9] h-[62px] left-[48px] rounded-[15px] top-[48px] w-[578px]">
        <div aria-hidden="true" className="absolute border-[#232d50] border-[5px] border-solid inset-0 pointer-events-none rounded-[15px]" />
      </div>
      <p className="absolute font-['Saans_VF-TRIAL:Bold',sans-serif] font-bold leading-[normal] left-[83px] opacity-[0.47] text-[25px] text-black text-nowrap top-[65px] whitespace-pre" style={{ fontVariationSettings: "'ital' 0, 'MONO' 0" }}>{`Nombre y  Apellido`}</p>
      <Group6 />
      <Group8 />
      <Group7 />
    </div>
  );
}

function Frame100() {
  return (
    <div className="absolute content-stretch flex gap-[141px] items-center justify-center left-[191px] top-[87px]">
      <Frame9 />
      <Frame2 />
    </div>
  );
}

export default function Contact() {
  return (
    <div className="bg-[#232d50] relative size-full" data-name="Contact">
      <Frame100 />
    </div>
  );
}