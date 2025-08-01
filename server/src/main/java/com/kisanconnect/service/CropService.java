package com.kisanconnect.service;

import com.kisanconnect.model.Crop;
import com.kisanconnect.repository.CropRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CropService {

    @Autowired
    private CropRepository cropRepository;

    public Crop addCrop(Crop crop) {
        return cropRepository.save(crop);
    }

    public List<Crop> getAllCrops() {
        return cropRepository.findAll();
    }

	public void deleteCrop(Long id) {
		cropRepository.deleteById(id);
		
	}
}
