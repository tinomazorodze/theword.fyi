// Renders the Open Graph image used on the home page

export const width = 1200
export const height = 630

export function OpenGraphImage(props: { title: string }) {
  const { title } = props
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
        backgroundColor: 'red',
        backgroundImage:
          'radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)',
        backgroundSize: '100px 100px',
        backgroundPosition: '0 -8px, 0 -8px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 120,
          fontStyle: 'normal',
          color: 'white',
          marginTop: 64,
          lineHeight: 1,
          whiteSpace: 'pre-wrap',
        }}
      >
        <b style={{
        }}>THE WORD.</b>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 60,
          fontStyle: 'normal',
          color: 'black',
          maxWidth: 990,
          marginTop: 0,
          lineHeight: 1,
          whiteSpace: 'pre-wrap',
        }}
      >
        <b style={{
        }}>A PREACHING OF THE TRUE GOSPEL OF CHRIST</b>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 50,
          fontStyle: 'normal',
          backgroundColor: 'black',
          height: 114,
          width: 520,
          borderRadius: 20,
          color: 'white',
          marginTop: 0,
          lineHeight: 1,
          whiteSpace: 'pre-wrap',
        }}
      >
        <b style={{
        }}>www.theword.fyi</b>
      </div>
      <div
        style={{
          display: 'flex',
        }}
      />
    </div>
  )
}
