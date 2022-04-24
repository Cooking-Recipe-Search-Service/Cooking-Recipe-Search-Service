package com.crss.crss.api;

import com.crss.crss.dto.CountryDto;
import com.crss.crss.mapper.DtoConverter;
import com.crss.crss.services.CountryService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/countries")
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class CountryController {

    private final DtoConverter dtoConverter;
    private final CountryService countryService;

    @GetMapping
    public List<CountryDto> getCountries() {
        return dtoConverter.getCountryDtoList(countryService.getAllCountries());
    }

}
