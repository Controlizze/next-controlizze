const Test = () => {
    return (
        {(openSidebar && <Sidebar close={closeSidebar} />) || (
            <header className="fixed top-0 left-0 w-full h-20 px-5 flex items-center gap-2 bg-background-700 shadow-xl shadow-default z-20 md:hidden">
              <button
                className="w-11 h-11 flex justify-center items-center bg-background-500 rounded-full"
                onClick={() => {
                  setOpenSidebar(!openSidebar)
                }}
              >
                <LuMenu className="text-white text-2xl" />
              </button>
    
              <div className="w-fit flex flex-col justify-center gap-0">
                <h3 className="text-xs text-zinc-400 uppercase">Dashboard</h3>
                <h1 className="text-xl font-bold text-white">Movimentações</h1>
              </div>
            </header>
          )}
    
          <header className="fixed w-full h-20 px-5 hidden items-center gap-2 bg-background-700 shadow-xl shadow-default z-20">
            <div className="w-fit flex flex-col justify-center gap-0">
              <h3 className="text-xs text-zinc-400 uppercase">Dashboard</h3>
              <h1 className="text-xl font-bold text-white">Movimentações</h1>
            </div>
          </header>
    
          {(openSidebar && (
            <div className="w-screen h-screen  bg-background-700 z-[30]"></div>
          )) || (
            <main className="w-full px-7 py-5 mt-20 flex flex-1 flex-col gap-8">
              {/*Cards*/}
              <div className="flex flex-col gap-4">
                {cards.map((card) => (
                  <Card.container key={card.id} padding="sm" flex="col" gap="sm">
                    <Card.content>
                      <Card.title flex="col" gradientColor={card.gradientColor}>
                        {card.title}
                      </Card.title>
                      <Card.icon fill={card.icon} />
                    </Card.content>
                    <Card.value>R$0.00</Card.value>
                  </Card.container>
                ))}
              </div>
    
              {/*Card*/}
              <Card.container padding="base" flex="col" gap="base">
                <div className="flex items-center gap-7">
                  <h2 className="text-xl font-semibold text-white">
                    Incluir Registro
                  </h2>
                  <div
                    className={`h-1 flex flex-auto bg-gradient-to-r from-primary-500 to-background-700 rounded-full`}
                  ></div>
                </div>
              </Card.container>
    
              {/*Card*/}
              <Card.container padding="base" flex="col" gap="base">
                <div className="flex items-center gap-7">
                  <h2 className="text-xl font-semibold text-white">Registros</h2>
                  <div
                    className={`h-1 flex flex-auto bg-gradient-to-r from-primary-500 to-background-700 rounded-full`}
                  ></div>
                </div>
    
                <Table />
              </Card.container>
            </main>
          )}
    )
}