$("li").click(()=>{
    $.ajax({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
        success: (data)=>{
            $.each(data, (_, value)=>{
                alert(value.name)
            })

        },
        error: (error)=>{
            console.log(error);
        }
    })
})