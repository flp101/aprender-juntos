const display = document.getElementById("input");

function inserir(input)
{
    display.value += input;
}

function calcular()
{
    try{
    display.value = eval(display.value)
    }
    catch(error)
    {
        display.value = "Error"
    }
}

function cancel()
{
    display.value = "";
}
