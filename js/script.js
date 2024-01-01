
    let pedido = [];
    let total = 0;

    
    function adicionarItem() {
        const itemSelecionado = document.getElementById('item');
        const quantidade = document.getElementById('quantidade').value;
        const formaPagamento = document.getElementById('formaPagamento').value;
        const itemNome = itemSelecionado.options[itemSelecionado.selectedIndex].text;
        const itemValor = calcularValorItem(itemSelecionado.value, quantidade);

      
        pedido.push({ nome: itemNome, quantidade: quantidade, formaPagamento: formaPagamento, valor: itemValor });

       
        atualizarListaPedido();

       
        total += itemValor;
        document.getElementById('totalPedido').textContent = `R$ ${total.toFixed(2)}`;

       
        document.getElementById('quantidade').value = '';
        document.getElementById('item').selectedIndex = 0;
        document.getElementById('formaPagamento').selectedIndex = 0;
    }

   
    function calcularValorItem(item, quantidade) {
        
        const valorPorItem = {
            salmao: 10.00,
            atum: 12.00,
            camarao: 15.00
          
        };

        return valorPorItem[item] * quantidade;
    }

    
    function atualizarListaPedido() {
        const listaPedido = document.getElementById('listaPedido');
        listaPedido.innerHTML = '';

        for (const item of pedido) {
            const li = document.createElement('li');
            li.textContent = `${item.quantidade}x ${item.nome} - ${item.formaPagamento}: R$ ${item.valor.toFixed(2)}`;
            listaPedido.appendChild(li);
        }
    }

    
    document.getElementById('adicionarItem').addEventListener('click', adicionarItem);

    document.getElementById('finalizarPedido').addEventListener('click', function() {
       
        // Exibir o modal
        $('#mensagemModal').modal('show');
      });
      