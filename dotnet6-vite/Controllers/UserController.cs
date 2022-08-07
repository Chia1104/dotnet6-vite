using Microsoft.AspNetCore.Mvc;
using dotnet6_vite.Services;
using dotnet6_vite.Helpers;
using Microsoft.Net.Http.Headers;

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
    [Authorize]
    public IActionResult GetAllUser()
    {
        return Ok(new
        {
            message = "User retrieved successfully",
            data = _userService.GetAllUser()
        });
    }
    
    [HttpGet(Name = "GetUserById")]
    [Authorize]
    public IActionResult GetUserById(Guid id)
    {
        return Ok(new
        {
            message = "User retrieved successfully",
            data = _userService.GetUserById(id)
        });
    }
    
    [HttpPost(Name = "UpdateUserArmor")]
    [Authorize]
    public IActionResult UpdateUserArmor(Guid armorId)
    {
        var accessToken = Request.Headers[HeaderNames.Authorization].ToString().Replace("Bearer ", "");
        return Ok(new
        {
            message = "User armor updated successfully",
            data = _userService.UpdateUserArmor(accessToken, armorId)
        });
    }
    
    [HttpPost(Name = "ClearUserArmor")]
    [Authorize]
    public IActionResult ClearUserArmor()
    {
        var accessToken = Request.Headers[HeaderNames.Authorization].ToString().Replace("Bearer ", "");
        _userService.ClearUserArmor(accessToken);
        return Ok(new
        {
            message = "User armor cleared successfully",
        });
    }
}