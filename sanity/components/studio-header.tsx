import Logo from "components/icons/Logo";

const StudioLogo = (props: any) => {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center">
      <Logo className="h-[30px] w-[30px]" />
      <>{renderDefault(props)}</>
    </div>
  )
}

export default StudioLogo
