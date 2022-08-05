using Microsoft.AspNetCore.Mvc;
using dotnet6_vite.Dto.Armor;
using dotnet6_vite.Services;

namespace dotnet6_vite.Controllers;

[ApiController]
[Route("api/[controller]/[action]")]
public class ArmorController : ControllerBase
{
    private readonly IArmorService _armorService;
    
    public ArmorController(IArmorService armorService)
    {
        _armorService = armorService;
    }
    
    [HttpGet(Name = "GetAllArmor")]
    public IActionResult GetAllArmor()
    {
        return Ok(new
        {
            message = "Armor retrieved successfully",
            data = _armorService.GetAllArmor()
        });
    }
    
    [HttpGet(Name = "GetArmorById")]
    public IActionResult GetArmorById(Guid id)
    {
        return Ok(new
        {
            message = "Armor retrieved successfully",
            data = _armorService.GetArmorById(id)
        });
    }
    
    [HttpPost(Name = "CreateArmor")]
    public IActionResult CreateArmor([FromBody] NewArmorDto armor)
    {
        return Ok(new
        {
            message = "Armor created successfully",
            data = _armorService.CreateArmor(armor)
        });
    }
    
    [HttpDelete(Name = "DeleteArmor")]
    public IActionResult DeleteArmor(Guid id)
    {
        _armorService.DeleteArmor(id);
        return Ok(new
        {
            message = "Armor deleted successfully",
        });
    }
}