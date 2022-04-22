package com.crss.crss.services;

import com.crss.crss.entities.CountryEntity;
import com.crss.crss.exceptions.CrssException;
import com.crss.crss.repositories.CountryRepository;
import com.crss.crss.repositories.FileSystemRepository;
import java.util.Base64;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor_ = {@Autowired})
public class CountryService {

    private final FileSystemRepository fileSystemRepository;
    private final CountryRepository countryRepository;

    public List<CountryEntity> getAllCountries() {
        return countryRepository.findAll();
    }

    public String getCountryImageBase64ById(String name) {
        return Base64.getEncoder().encodeToString(fileSystemRepository
            .findCountryImageInFileSystem(name));
    }

    public CountryEntity getCountryById(Long id) {
        return countryRepository.findById(id).orElseThrow(() -> new CrssException(HttpStatus.NOT_FOUND, "Cannot find country with id=" + id));
    }

}
