package com.crss.crss.google;

import java.util.Map;

public class GoogleUserInfo {

    private Map<String, Object> attributes;

    public GoogleUserInfo(Map<String, Object> attributes) {
        this.attributes = attributes;
    }

    public String getEmail() {
        return (String) attributes.get("email");
    }
}
