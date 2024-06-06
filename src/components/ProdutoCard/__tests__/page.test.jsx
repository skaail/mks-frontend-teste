import { describe } from "node:test"
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ProdutoCard } from "../ProdutoCard"
import React from "react"

const item = {
    name: "teste",
    photo: "data:image/webp;base64,UklGRqIFAABXRUJQVlA4IJYFAACQHgCdASqKAEgAPkUQkUiikVFOMCgERLQAaTQCp2vd/lm+amuf4L8NcskWvte/ifcB2mfzz7AH6k9SHzW/y3/K/tJ71Xoy/z/qAf3LqQP2O9gD9o/Tf9mf9vv2O9xT+0f+1nAJpny3HstUBfmVTcMqISPiSIThbgM34TcyJm2y+qhc2lS32JxyDIBXhEJczDXT2kFY5v9NqfVy+M4IPzvfszO2PnXKIH35s4I/+IWE4Ihju/gmFoHxFuNnkV+MtP6mL6BESs3wnpuDqCbTcMa2DDQ97D4Ob7sLuhfPs4aO7ikULgS+BvKBLOiY0GNvjzZ+vPndnZHL6ZfRQlAAAP7+6zsJVDTU0lAD7EXIz/L9/x72MEHW0RIK6mumNYr5B8DwVfgI+1n7PFO31T05bG6fcc/N61E/CYa8MZ5qWWc1/9xULTSVr+IXT4BhXBdu9vhTKMwqwq/O12OdLqmZcHce3iEqHkUDNdkNIy9VMSps+I63zmPP2VTJNQPm1luLAam/M98OLenZwgiawE6s6JgBWVMJXG2n7ogGUrj881fxGh/i787vbEiGeeP/u6yg9f18VCjc7Q4Ba2iDIkveXgmNNUPOnl6F5i9PFyNEslq2dCJ7NGzvnPsFTBG5Sw7oVQNIcOUuLk+/X99NPyDo06+gDwjP0MQRm5p/+JjSqJAf6298xwEmc68ohQBQtYue4eVGr3JgBjBtb9K6XZ92RNO6PsoIk15ccZa8RZ7CnFZuYu9ZdluIFdoiFEDKt3gr2gzlirfPX8LwB3K6feLnkVIjDrvD15hf42pnOt4lfgoOAW+yQOedh2cIMt0pYZXOeGRBimPD8/02VfT93DUvcIlMF24o1L4mqJVn0p3FaTGwdnaFD4xQom7TITW5hDa8msucSzfLXUiHqXP/hvkYkcS6gu76m4xzxcUiLbD/4+9yixn+vrxemqzlFsX9vl9OiN0tyOIYPI7GBDZdulwimKC0SVYQtR5EZq82KW0i7eep20mKW8zN581kdwbTJ+9qKpf/p60pwJedsE3zDfIjd+qdNdlnHS8p0Ws6E2PhaES5fG/nUqvTGcLLb/ggt6/xn2Zc4A96bQ+bD2O9UFqRK3j/+UK59HQ81fMv5D+v2u9h8tvXvcOc/SfDI57sCLzVNSaRq8Xjzw2ZUYGx6ZdIvbGm7SihrYDEYPO7v6DwYoorURyb1rvDfmUtuslMrFd1m6PVtkRCSz3LvzNzdWqDFD49CRpj7XqoPRu9KMStV8JFlBABfC1o/BlOrKG1usDB2ok7MmThqGRhSKWZ3rYq7N579CkM3VBfzAkl475XXvWnhgjydHb0enq3+YFwH6DrU09g5AGS02T8+JZUIbGvwxz7FAuiEC3TvlfzMT1cvP7Fqoyfpxw8zLlG5SriPYpgWUw2ODyKqZ/U7lM8CsnNn1gq3MhT/09nTwxXXu67EGpOzcQojsYr2L733ICu/v0z7S5WwcAZjO08AYNBt57sl2pJgDiLKz8LJUn6+HrJ8v+50//wyvheyBBduvp8RGr5fJFkrNAKxs7aleOReBWrYFFlRnHZVP1mbzzWbY1Lid3V7WsLw2twDLo1jc8hm6W/cvhB3YeRR+Jdrf31V/1CONkd/+MTp/ixlfUls+twLLt3+b/PfSNorXH58Q3eojGnk6nhpkctnTBlGvEZ/+ZO6wjshPQ27JO/QraeorW7pjnZ5HEVl+1pbKtuGHvqityzgrRFe8XXvYigObV+PGBUsiOBJULOXPbJwXs3W4Qhb+sKr2z9kV9eRzYYjQVh3iI7ugHhA/4EZX2p2YXuO7oQSLgnfKFzBrlwuq51lf345IroKUlSXkd/Kz/A9LfCrzJNP9GslXBraXfd+TAy+nn8L5gSEKhkM6eL5A/2QlZowpg9j+ApMAAAAA==",
    brand: "teste",
    description: "teste",
    price: 31
}

describe("Renderização Produdo Card", () => {
    it('renderiza a imagem', async () => {
        render(<ProdutoCard produto={item}/>)

        const img = screen.getByTestId("image")
        await waitFor(() => {expect(img).toBeInTheDocument()})
    })

    it('renderiza nome do produto', () => {
        render(<ProdutoCard produto={item}/>)

        const name = screen.getByTestId("name-brand")
        expect(name).toBe(name)
    })

    it('renderiza preço', () => {
        render(<ProdutoCard produto={item}/>)

        const price = screen.getByTestId("price")
        expect(price).toBe(price)
    })

    it('renderiza a decrição', () => {
        render(<ProdutoCard produto={item}/>)

        const description = screen.getByTestId("decription")
        expect(description).toBe(description)
    })

    it('renderiza botão de compra', () => {
        render(<ProdutoCard produto={item}/>)

        const btnCompra = screen.getByTestId("comprar")
        expect(btnCompra).toBeInTheDocument()
    })
})
