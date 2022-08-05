using Microsoft.AspNetCore.Mvc;
using dotnet6_vite.Services;

namespace dotnet6_vite.Controllers;

[ApiController]
[Route("api/[controller]/[action]")]
public class UserController : ControllerBase
{
    private readonly IUserService _userService;
    
    public UserController(IUserService userService)
    {
        _userService = userService;
    }
    
    [HttpGet(Name = "GetAllUser")]
    public IActionResult GetAllUser()
    {
        return Ok(new
        {
            message = "User retrieved successfully",
            data = _userService.GetAllUser()
        });
    }
    
    [HttpGet(Name = "GetUserById")]
    public IActionResult GetUserById(Guid id)
    {
        return Ok(new
        {
            message = "User retrieved successfully",
            data = _userService.GetUserById(id)
        });
    }
}