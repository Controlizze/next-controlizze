import { Button } from 'components/Button'
import { Input } from 'components/Input'

export function Form() {
  return (
    <form className="w-full flex flex-col gap-4">
      <Input.field>
        <Input.label htmlFor="date">Informe a data</Input.label>
        <Input.container>
          <Input.camp id="date" type="text" placeholder="dd/mm/yyyy" />
        </Input.container>
      </Input.field>

      <Input.field>
        <Input.label htmlFor="description">Informe a descrição</Input.label>
        <Input.container>
          <Input.camp id="description" type="text" placeholder="Descrição" />
        </Input.container>
      </Input.field>

      <Input.field>
        <Input.label htmlFor="category">Informe a categoria</Input.label>
        <Input.container>
          <Input.camp id="category" type="text" placeholder="Categoria" />
        </Input.container>
      </Input.field>

      <Input.field>
        <Input.label htmlFor="value">Informe o valor</Input.label>
        <Input.container>
          <Input.camp id="value" type="text" placeholder="Valor" />
        </Input.container>
      </Input.field>

      <div className="flex px-4 justify-between items-center">
        <fieldset className="flex items-center gap-1">
          <input
            id="type-expense"
            type="radio"
            name="type"
            className="w-4 h-4 accent-primary-500"
          />
          <label htmlFor="type-expense" className="text-base text-white">
            Despesa
          </label>
        </fieldset>

        <fieldset className="flex items-center gap-1">
          <input
            id="type-revenue"
            type="radio"
            name="type"
            className="w-4 h-4 accent-primary-500"
          />
          <label htmlFor="type-revenue" className="text-base text-white">
            Receita
          </label>
        </fieldset>
      </div>

      <Button>Adicionar</Button>
    </form>
  )
}
