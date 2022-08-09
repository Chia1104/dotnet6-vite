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
    
    [HttpPut(Name = "UpdateUserArmor")]
    [Authorize]
    public async Task<IActionResult> UpdateUserArmor(Guid armorId)
    {
        var accessToken = Request.Headers[HeaderNames.Authorization].ToString().Replace("Bearer ", "");
        return Ok(new
        {
            message = "User armor updated successfully",
            data = await _userService.UpdateUserArmor(accessToken, armorId)
        });
    }
    
    [HttpDelete(Name = "DeleteUserArmor")]
    [Authorize]
    public async Task<IActionResult> DeleteUserArmor()
    {
        var accessToken = Request.Headers[HeaderNames.Authorization].ToString().Replace("Bearer ", "");
        return Ok(new
        {
            message = "User armor deleted successfully",
            data = await _userService.RemoveUserArmor(accessToken)
        });
    }
    
    [HttpPut(Name = "UpdateUserWeapon")]
    [Authorize]
    public async Task<IActionResult> UpdateUserWeapon(Guid weaponId)
    {
        var accessToken = Request.Headers[HeaderNames.Authorization].ToString().Replace("Bearer ", "");
        return Ok(new
        {
            message = "User weapon updated successfully",
            data = await _userService.UpdateUserWeapon(accessToken, weaponId)
        });
    }
    
    [HttpDelete(Name = "DeleteUserWeapon")]
    [Authorize]
    public async Task<IActionResult> DeleteUserWeapon()
    {
        var accessToken = Request.Headers[HeaderNames.Authorization].ToString().Replace("Bearer ", "");
        return Ok(new
        {
            message = "User weapon deleted successfully",
            data = await _userService.RemoveUserWeapon(accessToken)
        });
    }
    
    [HttpPut(Name = "UpdateUserShield")]
    [Authorize]
    public async Task<IActionResult> UpdateUserShield(Guid shieldId)
    {
        var accessToken = Request.Headers[HeaderNames.Authorization].ToString().Replace("Bearer ", "");
        return Ok(new
        {
            message = "User shield updated successfully",
            data = await _userService.UpdateUserShield(accessToken, shieldId)
        });
    }
    
    [HttpDelete(Name = "DeleteUserShield")]
    [Authorize]
    public async Task<IActionResult> DeleteUserShield()
    {
        var accessToken = Request.Headers[HeaderNames.Authorization].ToString().Replace("Bearer ", "");
        return Ok(new
        {
            message = "User shield deleted successfully",
            data = await _userService.RemoveUserShield(accessToken)
        });
    }
    
    [HttpPut(Name = "UpdateUserHeadgear")]
    [Authorize]
    public async Task<IActionResult> UpdateUserHeadgear(Guid headgearId)
    {
        var accessToken = Request.Headers[HeaderNames.Authorization].ToString().Replace("Bearer ", "");
        return Ok(new
        {
            message = "User hedgear updated successfully",
            data = await _userService.UpdateUserHeadgear(accessToken, headgearId)
        });
    }
    
    [HttpDelete(Name = "DeleteUserHeadgear")]
    [Authorize]
    public async Task<IActionResult> DeleteUserHeadgear()
    {
        var accessToken = Request.Headers[HeaderNames.Authorization].ToString().Replace("Bearer ", "");
        return Ok(new
        {
            message = "User hedgear deleted successfully",
            data = await _userService.RemoveUserHeadgear(accessToken)
        });
    }
}